import React, { Component } from "react"
import styles from "./Button.module.css"

class ClassButton extends Component {
  render() {
    const { children, onClick } = this.props

    return (
      <div onClick={onClick} className={styles.button}>
        {children}
      </div>
    )
  }
}

export default ClassButton
