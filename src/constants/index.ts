// Custom imports
import { languageType } from "../types";

const SUPPORTED_LANGUAGES: languageType[] = [
    {
        locale: "en-US",
        direction: "ltr",
        name: "English"
    },
    {
        locale: "es",
        direction: "ltr",
        name: "Spanish"
    },
    {
        locale: "he-IL",
        direction: "rtl",
        name: "Hebrew"
    }

];

export {
    SUPPORTED_LANGUAGES
};