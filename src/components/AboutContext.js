import styles from '../css/AboutContext.module.css'

const AboutContext = props => {
  return (
    <div className={styles.container}>
      <div className={styles.otter}></div>
      <div className={styles.textContainer}>
        <p className={styles.header}>24 hours. 300+ Hackers. </p>
        <p className={styles.subheader}>
          Are you ready to learn, create, and inspire?
        </p>
      </div>
      <p className={styles.body1}>
        With interactive workshops, cross-team bonding activities, and a bounty
        of company swag, StormHacks is ready to welcome hackers, designers,
        engineers, and tech enthusiasts to our inaugural hackathon.
      </p>
      <p className={styles.body2}>
        On February 20 - 21, 2021, innovative individuals will come together to
        embrace their passion for technology - all in the span of 24 hours.
        Together they will face insurmountable challenges as they design ideas
        and create impactful projects.
      </p>
      <p className={styles.footer}>We hope to see you at StormHacks!</p>
    </div>
  )
}

export default AboutContext
