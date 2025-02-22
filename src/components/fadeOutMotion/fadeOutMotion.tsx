import { motion } from "framer-motion";
import { ReactNode } from "react";


const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: {
        opacity: 0,
        x: (-Math.abs(window.screen.width))
    },
    transition: { duration: 0.3 }
};

type PageWrapperProps = {
    children: ReactNode;
};

const FadeOutMotion = ({ children }: PageWrapperProps) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
};

export { FadeOutMotion };
