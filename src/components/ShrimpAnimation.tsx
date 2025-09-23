import { motion } from "framer-motion";

const ShrimpAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Shrimp 1 */}
      <motion.div
        className="absolute"
        initial={{ x: -100, y: 200 }}
        animate={{ 
          x: [window.innerWidth + 100, -100],
          y: [200, 250, 180, 220, 200]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg width="40" height="24" viewBox="0 0 40 24" className="text-coral/30">
          <path
            d="M35 12c0-1.5-1-3-2.5-4.5C31 6 29 5.5 27 6c-1.5.5-2.5 1.5-3 3-.5-1.5-1.5-2.5-3-3-2-.5-4 0-5.5 1.5C14 9 13 10.5 13 12s1 3 2.5 4.5C17 18 19 18.5 21 18c1.5-.5 2.5-1.5 3-3 .5 1.5 1.5 2.5 3 3 2 .5 4 0 5.5-1.5C34 15 35 13.5 35 12z"
            fill="currentColor"
            opacity="0.6"
          />
          <motion.path
            d="M2 12c0 0 2-1 4-1s3 1 4 0c1-1 2-2 4-1 2 1 3 2 2 4-1 2-2 1-4 0-2-1-3-1-4 0s-4 1-4 1"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Floating Shrimp 2 */}
      <motion.div
        className="absolute"
        initial={{ x: window.innerWidth + 100, y: 100 }}
        animate={{ 
          x: [-100, window.innerWidth + 100],
          y: [100, 80, 120, 90, 100]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 10
        }}
      >
        <svg width="35" height="21" viewBox="0 0 35 21" className="text-coral-light/25 scale-x-[-1]">
          <path
            d="M30 10.5c0-1.3-.8-2.5-2-3.8C26.5 5.2 25 4.8 23.5 5.2c-1.3.4-2 1.3-2.5 2.5-.4-1.2-1.2-2.1-2.5-2.5-1.5-.4-3 0-4.5 1.3C12.8 8 12 9.2 12 10.5s.8 2.5 2 3.8c1.5 1.5 3 1.9 4.5 1.5 1.3-.4 2.1-1.3 2.5-2.5.4 1.2 1.2 2.1 2.5 2.5 1.5.4 3 0 4.5-1.3C29.2 13 30 11.8 30 10.5z"
            fill="currentColor"
            opacity="0.5"
          />
          <motion.path
            d="M2 10.5c0 0 1.5-.8 3-.8s2.5.8 3.5 0c1-.8 1.5-1.5 3-.8 1.5.7 2.5 1.5 1.5 3-.7 1.5-1.5.8-3 0-1.5-.8-2.5-.8-3.5 0s-3.5.8-3.5.8"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </svg>
      </motion.div>

      {/* Floating Shrimp 3 */}
      <motion.div
        className="absolute"
        initial={{ x: -80, y: 300 }}
        animate={{ 
          x: [window.innerWidth + 80, -80],
          y: [300, 320, 280, 310, 300]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          delay: 15
        }}
      >
        <svg width="30" height="18" viewBox="0 0 30 18" className="text-orange-warm/20">
          <path
            d="M25 9c0-1-0.7-2-1.7-3C22 5 21 4.7 20 5c-1 .3-1.7 1-2 2-.3-1-1-1.7-2-2-1-.3-2 0-3.3 1C11.7 7 11 8 11 9s.7 2 1.7 3C14 13 15 13.3 16 13c1-.3 1.7-1 2-2 .3 1 1 1.7 2 2 1 .3 2 0 3.3-1C24.3 11 25 10 25 9z"
            fill="currentColor"
            opacity="0.4"
          />
          <motion.path
            d="M2 9c0 0 1-.7 2.5-.7s2 .7 3 0c1-.7 1.3-1.3 2.5-.7 1.2.6 2 1.3 1.2 2.5-.6 1.2-1.2.7-2.5 0-1.3-.7-2-.7-3 0s-3 .7-3 .7"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ShrimpAnimation;