"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Loading: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className={`relative  ${isLoading && "h-screen overflow-hidden"}`}>
      {isLoading && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          className="absolute inset-0 z-50 h-screen flex items-center justify-center"
        >
          <svg width="102" height="66" viewBox="0 0 92 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path  initial={{opacity:0, y:100 ,scale:0.5}} animate={{opacity:1, y:0, scale:1}} transition={{duration:0.5, delay:1.5}} d="M5 35H0L45.5 0L91.5 35H86.5L45.5 4L5 35Z" fill="#D7BE69" />
            <motion.path  initial={{opacity:0, y:100 ,scale:0.5}} animate={{opacity:1, y:0, scale:1}} transition={{duration:0.5, delay:1.3}}   d="M0 44H5L45.5 13L86.5 44H91.5L45.5 9L0 44Z" fill="#D7BE69" />      
            <motion.path d="M49.5 30L47.9162 31.3468V39.0683C48.4741 39.1092 49.0017 39.1672 49.5 39.2387L49.5 30Z" fill="#D7BE69" />

            <motion.g initial={{scale: 0 , opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:2}}>
                <path d="M35.5 41.9998C35.5 41.9998 39 39.9214 46 39.9998C53 40.0783 56.5 41.9998 56.5 41.9998C56.5 41.9998 55.0302 40.53 51.5761 39.648C51.3431 39.5885 51.1011 39.5317 50.8499 39.4782L50.2233 39.3553C49.9894 39.3134 49.7484 39.2743 49.5 39.2387C49.0017 39.1672 48.4741 39.1092 47.9162 39.0683L47 39.0181L46.3619 39.0022C46.2424 39.0006 46.1218 38.9998 46 38.9998C45.9044 38.9998 45.8095 39.0003 45.7153 39.0013C45.2958 39.0056 44.8908 39.0193 44.5 39.0414C44.2387 39.0561 43.9838 39.0746 43.7351 39.0964C43.5404 39.1135 43.3496 39.1327 43.1626 39.1538C42.9362 39.1794 42.7153 39.2078 42.5 39.2387L41.7767 39.3553C41.5084 39.4035 41.2495 39.4555 41 39.5108C40.4564 39.6312 39.957 39.7669 39.5 39.9112C36.7059 40.7939 35.5 41.9998 35.5 41.9998Z" fill="#D7BE69" />
                <path d="M43.7351 32.6081V39.0964C43.9838 39.0746 44.2387 39.0561 44.5 39.0414V27L43 28.5V32L43.7351 32.6081Z" fill="#D7BE69" />
                <path d="M39.5 33V39.9112C39.957 39.7669 40.4564 39.6312 41 39.5108V32L39.5 33Z" fill="#D7BE69" />
            </motion.g>
            <motion.path  initial={{opacity:0 ,scale:0.5}} animate={{opacity:1, y:0, scale:1}} transition={{delay:1.5}} d="M41.7767 39.3553V33.3306M41.7767 39.3553C42.0106 39.3134 42.2516 39.2743 42.5 39.2387M41.7767 39.3553L42.5 39.2387M41.7767 39.3553C41.5084 39.4035 41.2495 39.4555 41 39.5108M42.5 39.2387C42.5 37.4925 42.5 34.4 42.5 34V39.2387ZM42.5 39.2387C42.7153 39.2078 42.9362 39.1794 43.1626 39.1538M43.1626 39.1538V34.2757M43.1626 39.1538C43.3496 39.1327 43.5404 39.1135 43.7351 39.0964M39.5 39.9112C36.7059 40.7939 35.5 41.9998 35.5 41.9998C35.5 41.9998 39 39.9214 46 39.9998C53 40.0783 56.5 41.9998 56.5 41.9998C56.5 41.9998 55.0302 40.53 51.5761 39.648M39.5 39.9112V33L41 32V39.5108M39.5 39.9112C39.957 39.7669 40.4564 39.6312 41 39.5108M43.7351 39.0964V32.6081L43 32V28.5L44.5 27V39.0414M43.7351 39.0964C43.9838 39.0746 44.2387 39.0561 44.5 39.0414M44.5 39.0414C44.8908 39.0193 45.2958 39.0056 45.7153 39.0013M45.7153 39.0013C45.8095 39.0003 45.9044 38.9998 46 38.9998C46.1218 38.9998 46.2424 39.0006 46.3619 39.0022M45.7153 39.0013V28.8763M46.3619 39.0022V29.1199M46.3619 39.0022L47 39.0181M46.3619 39.0022C46.5785 39.005 46.7911 39.0104 47 39.0181M47 39.0181V29.2956M47 39.0181C47.314 39.0296 47.6194 39.0466 47.9162 39.0683M47 39.0181L47.9162 39.0683M47.9162 39.0683C48.4741 39.1092 49.0017 39.1672 49.5 39.2387M47.9162 39.0683V31.3468M47.9162 31.3468L49.5 30L49.5 39.2387M47.9162 31.3468V39.0964M49.5 39.2387C49.7484 39.2743 49.9894 39.3134 50.2233 39.3553M50.2233 39.3553V31.8064M50.2233 39.3553C50.4382 39.3939 50.647 39.435 50.8499 39.4782M50.2233 39.3553L50.8499 39.4782M50.8499 39.4782V32.1485M50.8499 39.4782C51.1011 39.5317 51.3431 39.5885 51.5761 39.648M51.5761 39.648V32.3623" stroke="#D7BE69" strokeWidth="0.2" />
            <motion.g initial={{scale: 0 , opacity:0}} animate={{scale:1, opacity:1}}>
                <motion.path initial={{rotateY:220}} animate={{rotateY:0}} transition={{duration:2}} fillRule="evenodd" clipRule="evenodd" d="M48.3779 53.3631C53.2006 48.8226 60 42.4213 60 35.0001C60 27 53.5 20 45.5 20C37.5 20 31.5 26.5 31.5 34.5C31.5 42.2423 38.1419 48.6562 42.8476 53.2004C43.9159 54.2321 44.8845 55.1674 45.6529 56C46.4154 55.2106 47.3519 54.3289 48.3779 53.3631ZM45.5 47.5C52.6797 47.5 58.5 41.6797 58.5 34.5C58.5 27.3203 52.6797 21.5 45.5 21.5C38.3203 21.5 32.5 27.3203 32.5 34.5C32.5 41.6797 38.3203 47.5 45.5 47.5Z" fill="#0B2625" />
            </motion.g >
          </svg>
        </motion.div>
      )}
      <div
        className={`${isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 flex flex-col items-center w-screen`}
      >
        {children}
      </div>
    </div>
  );
};

export default Loading;