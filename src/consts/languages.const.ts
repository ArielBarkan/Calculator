// Custom imports
import { languageType } from "../types";

const SUPPORTED_LANGUAGES: languageType[] = [
    {
        locale: "he-IL",
        direction: "rtl",
        name: "עברית",
        flag: "IL"
    },
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
    }
];

export { SUPPORTED_LANGUAGES };
