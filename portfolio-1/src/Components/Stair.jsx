import React from 'react';
import { motion } from 'framer-motion';

function Stair() {
    const stairAnimation = {
        initial: { top: '0%' },
        animate: { top: '100%' },
        exit: { top: ['100%', '0%'] },
    };

    const reverseIndex = (index) => {
        const totalSteps = 6; // Number of stairs
        return totalSteps - index - 1;
    };

    return (
        <div className="stair-container">
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    className="motiondiv"
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.1,
                    }}
                />
            ))}
        </div>
    );
}

export default Stair;
