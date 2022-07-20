import toggleTheme from '../utils/theme'

import styles from '../css/ToggleButton.module.css'

const MobileHeader = props => {
  return (
    <button className={styles.themeButton} onClick={toggleTheme}>
      <div className={styles.themeToggle} />
    </button>
  )
}

export default MobileHeader
