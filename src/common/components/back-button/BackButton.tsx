import React from "react";
import styles from "./BackButton.module.scss";

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, label = "Back" }) => {
  return (
    <button className={styles.backButton} onClick={onClick}>
      ← {label}
    </button>
  );
};
