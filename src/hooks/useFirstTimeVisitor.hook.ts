// hooks/useFirstTimeVisitor.ts
import { useEffect, useState } from "react";

const VISIT_KEY = "calcPrice_firstVisit"; // ✅ Unique key to track first-time visits

const useFirstTimeVisitor = () => {
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem(VISIT_KEY);

        if (!hasVisited) {
            setIsFirstVisit(true); // ✅ First-time visitor detected
            localStorage.setItem(VISIT_KEY, "true"); // ✅ Mark as visited in LocalStorage
        }
    }, []);

    return { isFirstVisit, setIsFirstVisit };
};


export { useFirstTimeVisitor };