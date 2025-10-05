import React from "react";
import styles from "./IconButton.module.scss";

type IconButtonProps = {
  label?: string;   
  icon?: React.ReactNode;
  onClick?: () => void;
  variant?: "light" | "dark";
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  label,
  icon,
  onClick,
  variant = "light",
  className,
}) => {
  return (
    <button
      className={`${styles.iconButton} ${styles[variant]} ${className ?? ""}`}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
};
