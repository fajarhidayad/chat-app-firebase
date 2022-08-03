import React from "react";
import { motion } from "framer-motion";
import { fadeOut, fadeUp } from "./animation";

interface LayoutProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  variant: "FADE_OUT" | "FADE_UP";
}

const Layout: React.FC<LayoutProps> = ({
  children,
  delay,
  className,
  variant,
}) => {
  const animateVariant = variant === "FADE_OUT" ? fadeOut : fadeUp;

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      variants={animateVariant}
      transition={{ duration: 0.3, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
