import ToggleButton from './ToggleButton'
import { calculateTimeLeft } from '../utils/timeLeft'
import styles from '../css/MobileHeader.module.css'

import Banner from '../components/Banner'
import surgeBanner from '../assets/surge-banner.svg'
import mlhBanner from '../assets/mlh-banner.svg'

const MobileHeader = props => {
  const beforeDeadline = calculateTimeLeft('2021-01-25T08:00:00Z')
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.headerContainer}>
        <ToggleButton />
        <div className={styles.banners}>
          <Banner
            width="110"
            surge={{
              src: surgeBanner,
              alt: 'Surge Banner',
              width: '45px',
              height: '87px'
            }}
            mlh={{
              src: mlhBanner,
              alt: 'MLH Banner',
              width: '50px',
              height: '87px'
            }}
          />
        </div>
      </div>
      <div className={styles.headingContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.stormhacksLogo} />
          <p className={styles.title}>STORM HACKS</p>
        </div>
        <p className={styles.date}>FEBRUARY 20 - 21, 2021</p>
        <p className={styles.subheading}>24 hours. 300+ Hackers.</p>
        <p className={styles.subheader}>
          Are you ready <br className={styles.breakLine} />
          to learn, create, and inspire?
        </p>
        {beforeDeadline ? (
          <a
            className={styles.apply}
            href="https://stormhacks.typeform.com/to/GWfDap3w"
            target="_blank"
            rel="noreferrer"
          >
            APPLY NOW
          </a>
        ) : (
          <div className={styles.apply}> APPLICATIONS CLOSED </div>
        )}
      </div>
    </div>
  )
}

export default MobileHeader
