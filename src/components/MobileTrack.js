import styles from '../css/MobileTrack.module.css'

const MobileTrack = props => {
  return (
    <div className={styles.container}>
      <div className={styles.trackContainer}>
        <p className={styles.trackTitle}>{props.trackTitle}</p>
        {props.trackIcon}
      </div>
      <p className={styles.description}>{props.description}</p>
    </div>
  )
}

export default MobileTrack
