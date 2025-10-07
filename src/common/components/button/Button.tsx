import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  label?: string
  onClick: () => void
  className?: string
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  children,
}) => (
  <button onClick={onClick} className={`${styles.button} ${className || ''}`}>
    {children || label}
  </button>
)
