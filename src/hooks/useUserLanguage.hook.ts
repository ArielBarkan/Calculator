// React and modules imports
import { useEffect, useState } from "react";

const useUserLanguage = () => {
    const [language, setLanguage] = useState<string>("");

    useEffect(() => {
        setLanguage(navigator.language || navigator.languages[0]);
    }, []);

    return language;
};

export { useUserLanguage };
