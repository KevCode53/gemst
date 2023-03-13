import { useMenu } from '../../hooks/useMenu';

// Import Styles Module
import styles from './styles.module.css'

const index = () => {
  const {openMenu} = useMenu()
  return (
    <nav className={styles.navbar}>
      <div className={styles.burgerBtn} onClick={openMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <picture className={`userImg ${styles.userInfoNav}`}>
        <img src="vite.svg" alt="username" />
        <p>Username</p>
      </picture>
    </nav>
  );
}

export default index;