// Custom imports
import { languageType } from "../types";

const supportedLanguages: languageType[] = [
    {
        locale: "en-US",
        direction: "ltr",
        name: "English",
        flag: "GB"
    },
    {
        locale: "es",
        direction: "ltr",
        name: "Español",
        flag: "ES"
    },
    {
        locale: "he-IL",
        direction: "rtl",
        name: "עברית",
        flag: "IL"
    }
];

export {
    supportedLanguages
};