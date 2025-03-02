// hooks/useFirstTimeVisitor.ts
import { useEffect, useState } from "react";
import { localStorageGetCookiesConsent, localStorageUpdateCookiesConsent } from "../services/localStorage.service";

const useFirstTimeVisitor = () => {
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        const hasVisited = localStorageGetCookiesConsent();

        if (!hasVisited) {
            setIsFirstVisit(true);
            localStorageUpdateCookiesConsent(true);
        }
    }, []);

    return { isFirstVisit, setIsFirstVisit };
};


export { useFirstTimeVisitor };