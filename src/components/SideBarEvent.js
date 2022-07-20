import styles from '../css/SideBarEvent.module.css'
import { useTheme } from '../utils/theme'

const eventResolver = require.context('../assets/events', false, /.*\.svg/)

const SideBarEvents = props => {
  const theme = useTheme()

  const getSrc = image =>
    theme === 'dark' && image.srcDark ? image.srcDark : image.srcLight

  return (
    <div className={styles.container}>
      <p className={styles.date}>{props.date}</p>
      <span className={styles.line} />
      {props.events.map(
        ({ image, link, customStyle, eventName, eventTime }) => (
          <a
            href={link}
            key={eventName}
            target="_blank"
            rel="noreferrer"
            style={customStyle}
            className={styles.links}
          >
            <div className={styles.innerContainer}>
              <img src={eventResolver(getSrc(image)).default} alt={eventName} />
              <div className={styles.eventDescription}>
                <p className={styles.eventText}>{eventName}</p>
                <p className={styles.eventText}>{eventTime}</p>
              </div>
            </div>
          </a>
        )
      )}
    </div>
  )
}

export default SideBarEvents
