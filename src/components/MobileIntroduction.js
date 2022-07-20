import styles from '../css/MobileIntroduction.module.css'

const MobileIntroduction = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>What is StormHacks?</p>
      <p className={styles.subheading}>SFU'S Premiere Hackathon</p>
      <p className={styles.text}>
        On February 20 - 21, 2021, innovative individuals will come together to
        embrace their passion for technology. Together they will work through
        challenges and build impactful projects - all in the span of 24 hours.
      </p>
      <p className={styles.text}>
        With interactive workshops, networking opportunities, and exciting
        prizes, StormHacks is ready to welcome designers, engineers, and tech
        enthusiasts to our inaugural virtual hackathon.
      </p>
      <p className={styles.closingText}>We hope to see you at StormHacks!</p>
    </div>
  )
}

export default MobileIntroduction
