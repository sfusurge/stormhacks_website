import Sponsor from './Sponsor'

import styles from '../css/MobileSponsors.module.css'

import sponsors from '../utils/sponsorsList'
import { useTheme } from '../utils/theme'

const sponsorResolver = require.context('../assets/sponsors', false, /.*\.png/)

const MobileSponsors = props => {
  const theme = useTheme()

  const getSrc = sponsor =>
    theme === 'dark' && sponsor.srcDark ? sponsor.srcDark : sponsor.srcLight

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Sponsors</p>
      <div className={styles.sponsorContainer}>
        {sponsors.map(
          (sponsor, idx) =>
            sponsor.srcLight && (
              <div
                key={sponsor.name}
                className={idx < 4 ? styles.goldSponsors : styles.sponsors}
              >
                <Sponsor
                  src={sponsorResolver(getSrc(sponsor))}
                  name={sponsor.name}
                  width={
                    window.innerWidth < 600 && sponsor.mobileWidth
                      ? sponsor.mobileWidth + 'px'
                      : sponsor.width + 'px'
                  }
                  link={sponsor.link}
                />
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default MobileSponsors
