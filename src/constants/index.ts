// Custom imports
import { LanguageType } from "../types";

const DEFAULT_REACT_APP_LOCALES_URL = "https://arielstorageforassets.blob.core.windows.net/assets/translations/front-end/locales";
const SUPPORTED_LANGUAGES: LanguageType[] = [
    {
        locale: "he-IL",
        direction: "rtl",
        name: "Hebrew"
    },
    {
        locale: "en-US",
        direction: "ltr",
        name: "English"
    }

];

export {
    SUPPORTED_LANGUAGES,
    DEFAULT_REACT_APP_LOCALES_URL
};