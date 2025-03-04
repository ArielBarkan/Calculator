import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BeatingHeartProps {
    children: ReactNode; // Allows any React element inside
}

const BeatingHeart = ({ children }: BeatingHeartProps) => {
    return (
        <motion.div
            animate={{ scale: [1, 1.2, 1] }} // Heartbeat effect (grow & shrink)
            transition={{
                duration: 0.6, // Smooth duration
                repeat: Infinity, // Loops forever
                repeatType: "reverse", // Ensures smooth in-out effect
                ease: "easeInOut"
            }}
        >
            {children} {/* This allows any icon inside */}
        </motion.div>
    );
};

export { BeatingHeart };
