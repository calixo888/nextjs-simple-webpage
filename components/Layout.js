import styles from '../styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <h1 className={styles.navbar}>Navbar</h1>
      {children}
      <h1 className={styles.footer}>Footer</h1>
    </>
  )
}
