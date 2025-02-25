// React and modules imports
import React from "react";
import { motion } from "framer-motion";

// Custom imports
import { FadeInTextProps } from "../../../types";

const FadeInText: React.FC<FadeInTextProps> = ({ children, isVisible }) => {
    return (
        <motion.span
            initial={{ opacity: .1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.span>
    );
};

export { FadeInText };
