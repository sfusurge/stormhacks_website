import { useState } from 'react'

import Modal from '../components/Modal'

import styles from '../css/DesktopFile.module.css'

const DesktopFile = ({ Content, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openFile = () => {
    setIsOpen(!!Content)
  }

  const closeFile = () => {
    setIsOpen(false)
  }

  return (
    <>
      {isOpen && (
        <Modal title={props.text} onClose={closeFile}>
          <Content />
        </Modal>
      )}
      <div className={styles.container} onClick={openFile}>
        <img src={props.icon} alt="File icon" />
        <p className={styles.text}>{props.text}</p>
      </div>
    </>
  )
}

export default DesktopFile
