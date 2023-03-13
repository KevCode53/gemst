import { Link } from "react-router-dom";
import { useMenu } from "../../hooks/useMenu";

// Import Styles Module
import styles from './styles.module.css'

const index = () => {
  const {isOpen, closeMenu, handleExpand, isExpand} = useMenu()
  console.log(isExpand)
  return (
    <div className={`${styles.sidebarContainer} ${isOpen && styles.open} ${!isExpand && styles.expand}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <picture className={styles.logoCompany}>
            <img src="vite.svg" alt="logo" />
            <p>Company</p>
          </picture>
          <button className={styles.closeBtn} onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          </button>
          <button className={styles.expandBtn} onClick={handleExpand}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-player-skip-back" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 5v14l-12 -7z" />
              <line x1="4" y1="5" x2="4" y2="19" />
            </svg>
          </button>
        </div>

        <div className={styles.userInfo}>
          <p>User Name</p>
          <small>Permision</small>
          <picture>
            <img src="vite.svg" alt="user avatar" />
          </picture>
        </div>

        <div className={styles.menu}>
          <Link className={styles.active} to='/dashboard'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-board" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M4 9h8" />
              <path d="M12 15h8" />
              <path d="M12 4v16" />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link to='/dashboard'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-devices-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6" />
              <rect x="13" y="4" width="8" height="16" rx="1" />
              <line x1="7" y1="19" x2="10" y2="19" />
              <line x1="17" y1="8" x2="17" y2="8.01" />
              <circle cx="17" cy="16" r="1" />
              <line x1="9" y1="15" x2="9" y2="19" />
            </svg>
            <span>Maintenances</span>
          </Link>
          <Link to='/dashboard'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
              <path d="M18 14v4h4" />
              <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
              <rect x="8" y="3" width="6" height="4" rx="2" />
              <circle cx="18" cy="18" r="4" />
              <path d="M8 11h4" />
              <path d="M8 15h3" />
            </svg>
            <span>Reports</span>
          </Link>
          <Link className={styles.logoutBtn} to='/dashboard'>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-power" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M7 6a7.75 7.75 0 1 0 10 0" />
              <line x1="12" y1="4" x2="12" y2="12" />
            </svg>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;