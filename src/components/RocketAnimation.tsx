import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface RocketAnimationProps {
  onAnimationEnd: () => void;
}

const RocketAnimation: React.FC<RocketAnimationProps> = ({ onAnimationEnd }) => {
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      onAnimationEnd();
    }, 1500); // Duration of animation
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="fixed top-1/2 left-0 w-full h-full flex items-center justify-start z-50 bg-transparent pointer-events-none">
      <motion.img
        src="/rocket.png" // ✅ Now coming from public folder
        alt="Rocket"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: '100vw', opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        className="w-24 h-24"
      />
    </div>
  );
};

export default RocketAnimation;