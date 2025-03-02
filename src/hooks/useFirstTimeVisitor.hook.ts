// hooks/useFirstTimeVisitor.ts
import { useEffect, useState } from "react";
import { localStorageGetIsFirstVisit, localStorageUpdateIsFirstVisit } from "../services/localStorage.service";

const useFirstTimeVisitor = () => {
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        const hasVisited = localStorageGetIsFirstVisit();

        if (!hasVisited) {
            setIsFirstVisit(true);
            localStorageUpdateIsFirstVisit(true);
        }
    }, []);

    return { isFirstVisit, setIsFirstVisit };
};


export { useFirstTimeVisitor };