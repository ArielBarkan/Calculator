// React imports
import React, { createContext, useState, useContext, useEffect } from "react";

// Modules imports
import { ThemeProvider } from "styled-components";

// Custom imports
import { THEME_ENUMS } from "../enums";
import { lightTheme, darkTheme } from "../styles";
import { localStorageUpdateSelectedTheme, localStorageGetSelectedTheme } from "../services/localStorageService";

interface ThemeContextType {
    theme: THEME_ENUMS;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<THEME_ENUMS>(localStorageGetSelectedTheme());

    const toggleTheme = () => {
        setTheme((prev) => (prev === THEME_ENUMS.light ? THEME_ENUMS.dark : THEME_ENUMS.light));
    };

    useEffect(() => {
        localStorageUpdateSelectedTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === THEME_ENUMS.light ? lightTheme : darkTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProviderWrapper");
    }
    return context;
};

