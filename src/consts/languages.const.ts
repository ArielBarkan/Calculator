// Custom imports
import { languageType } from "../types";

const SUPPORTED_LANGUAGES: languageType[] = [
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
        locale: "pt-BR",
        direction: "ltr",
        name: "Português",
        flag: "BR"
    },
    {
        locale: "he-IL",
        direction: "rtl",
        name: "עברית",
        flag: "IL"
    }
];

export {
    SUPPORTED_LANGUAGES
};