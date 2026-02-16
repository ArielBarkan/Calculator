// React and modules imports
import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider } from "styled-components";
// Custom imports
import { THEME_ENUMS } from "../enums";
import { lightTheme, darkTheme } from "../styles";
import { localStorageUpdateSelectedTheme, localStorageGetSelectedTheme } from "../services";
import { ThemeContextType } from "../types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const CustomThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<THEME_ENUMS>(localStorageGetSelectedTheme());
    const [direction, setDirection] = useState<"ltr" | "rtl">(document.body.dir as "ltr" | "rtl");

    // Detect changes in `document.body.dir`
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setDirection(document.body.dir as "ltr" | "rtl");
        });

        observer.observe(document.body, { attributes: true, attributeFilter: ["dir"] });

        return () => observer.disconnect();
    }, []);

    const toggleTheme = (): THEME_ENUMS => {
        const newTheme: THEME_ENUMS = theme === THEME_ENUMS.light ? THEME_ENUMS.dark : THEME_ENUMS.light;
        setTheme(newTheme);
        localStorageUpdateSelectedTheme(newTheme);
        return newTheme;
    };

    const appliedTheme = {
        ...(theme === THEME_ENUMS.light ? lightTheme : darkTheme),
        direction // Inject direction into the theme
    };

    return (
        <ThemeContext.Provider value={{ theme, direction, toggleTheme }}>
            <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a CustomThemeProvider");
    }
    return context;
};
