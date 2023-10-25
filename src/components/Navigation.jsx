import { Link } from "react-router-dom"
import styles from "./Navigation.module.css"

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.link}>
        Home
      </Link>
      <Link to='/about' className={styles.link}>
        About
      </Link>
    </nav>
  )
}
