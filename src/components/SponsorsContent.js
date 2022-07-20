import Sponsor from './Sponsor'

import styles from '../css/SponsorsContent.module.css'

import sponsors from '../utils/sponsorsList'
import { useTheme } from '../utils/theme'

const sponsorResolver = require.context('../assets/sponsors', false, /.*\.png/)

const SponsorsContent = props => {
  const theme = useTheme()

  const getSrc = sponsor =>
    theme === 'dark' && sponsor.srcDark ? sponsor.srcDark : sponsor.srcLight

  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        This event wouldn’t be possible without all of the community support!
      </p>
      <div className={styles.innerContainer}>
        {sponsors.map(
          sponsor =>
            sponsor.srcLight && (
              <div
                key={sponsor.name}
                className={styles.sponsors}
                id={styles[sponsor.title]}
              >
                <Sponsor
                  src={sponsorResolver(getSrc(sponsor)).default}
                  name={sponsor.name}
                  width={sponsor.width + 'px'}
                  link={sponsor.link}
                />
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default SponsorsContent
