import { ReactNode } from "react";
import { MenuContextProvider } from "../../context/MenuContext";

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

// Import Styles Module
import styles from './styles.module.css'

const index = ({children}:{children:ReactNode}) => {
  return (
    <>
    <MenuContextProvider>
      <Sidebar />
      <div className={styles.content}>
        <Navbar />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
      </MenuContextProvider>
    </>
  );
}

export default index;