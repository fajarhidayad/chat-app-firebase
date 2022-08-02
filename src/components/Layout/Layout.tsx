import React from "react";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
  delay?: number;
  classNames?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, delay, classNames }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
      className={classNames}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
