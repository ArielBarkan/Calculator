import { motion } from "framer-motion";

type FadeInTextProps = {
    children: React.ReactNode;
    isVisible: boolean;
};

const FadeInText: React.FC<FadeInTextProps> = ({ children, isVisible }) => {
    return (
        <motion.p
            initial={{ opacity: .1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.p>
    );
};

export { FadeInText };
