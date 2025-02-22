import { motion } from "framer-motion";
import { ReactNode } from "react";

//  initial={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
//             transition={{ duration: 0.3 }}


//     initial: { opacity: 1, height: "auto" },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//     transition: { duration: 1 }
const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -1000, transition: { duration: 0.3 } }
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
