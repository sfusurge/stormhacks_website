import { useState } from 'react'

import toggleTheme from '../utils/theme'
import styles from '../css/Footer.module.css'

import Modal from '../components/Modal'
import AllExecs from '../components/AllExecs'
import SideBar from '../components/SideBar'

const Footer = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  const openFile = () => {
    setIsOpen(true)
  }

  const closeFile = () => {
    setIsOpen(false)
  }

  const toggleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true)
  }

  return (
    <div className={styles.container}>
      {isOpen && (
        <Modal title={'Meet The Execs'} onClose={closeFile}>
          <AllExecs />
        </Modal>
      )}
      <div className={sideBar ? styles.sideBarActive : styles.sideBar}>
        <SideBar />
      </div>
      <a id={styles.logoPad} href='https://www.facebook.com/sfusurge/' target='_blank' rel="noreferrer">&nbsp;</a>
      <div className={styles.innerContainer}>
        <div>
          <a
            className={styles.hyperLinks}
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
            rel="noreferrer"
          >
            MLH Code Of Conduct
          </a>
          <button
            className={styles.hyperLinkBtn}
            onClick={() => {
              openFile()
            }}
          >
            Meet the Team Behind StormHacks
          </button>
        </div>
        <button className={styles.themeButton} onClick={toggleTheme}>
          <div className={styles.themeToggle}></div>
        </button>
        <button
          className={styles.notificationButton}
          onClick={toggleSideBar}
        >
          <div className={styles.notificationIcon}></div>
        </button>
      </div>
    </div>
  )
}
export default Footer
