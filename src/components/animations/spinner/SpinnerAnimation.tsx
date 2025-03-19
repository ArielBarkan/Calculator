import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { DISPATCH_EVENTS } from "../../../consts";

interface SpinnerAnimationProps {
    children: ReactNode;
}


const SpinnerAnimation = ({ children }: SpinnerAnimationProps) => {
    // Create animation controls to start/stop animations programmatically
    const controls = useAnimation();
    useEffect(() => {
        window.addEventListener(DISPATCH_EVENTS.TRIGGER_SPIN, () => {
            controls.start({
                rotate: 360,
                transition: {
                    repeat: 1,
                    duration: 1,
                    ease: "linear"
                }
            }).then(() => {
                controls.set({ rotate: 0 });
            })
            ;
        });

    }, [controls]);


    return (
        <motion.div style={{ width: "25px", height: "25px" }} animate={controls}>
            {children}
        </motion.div>
    );
};

export { SpinnerAnimation };