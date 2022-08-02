import React from "react";
import { ImSpinner2 } from "react-icons/im";

interface LoadingSpinnerProps {
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 20,
}) => {
  return <ImSpinner2 size={size} className="animate-spin" />;
};
