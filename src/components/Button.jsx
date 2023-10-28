import { useState } from "react"
import styles from "./Button.module.css"

export const Button = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.button}>
      {children}
    </div>
  )
}
