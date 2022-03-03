import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made BY <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> ME
      </footer>
    </>
  )
}
