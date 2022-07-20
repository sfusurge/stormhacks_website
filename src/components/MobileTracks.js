import MobileTrack from '../components/MobileTrack'

import styles from '../css/MobileTracks.module.css'

import { ReactComponent as ConnectionIcon } from '../assets/light/connections-track-light.svg'
import { ReactComponent as EnvironmentIcon } from '../assets/light/environmentTrack-light.svg'
import { ReactComponent as HealthIcon } from '../assets/light/healthTrack-light.svg'

const MobileTracks = props => {
  return (
    <>
      <div className={styles.headingContainer}>
        <p className={styles.heading}>Stuck on a creative block?</p>
        <p className={styles.subheading}>Event Tracks are here to help!</p>
      </div>
      <MobileTrack
        trackTitle={
          <>
            Connections & <br /> Digital Interactions
          </>
        }
        trackIcon={<ConnectionIcon />}
        description="Hacks focused on creating tools to build community and cultivate relationships in a digital environment."
      />
      <MobileTrack
        trackTitle={
          <>
            Environment & <br /> Sustainability
          </>
        }
        trackIcon={<EnvironmentIcon />}
        description="Hacks focused on creating solutions for a more sustainable future and leaving a positive footprint on the environment."
      />
      <MobileTrack
        trackTitle={<>Health & Wellness</>}
        trackIcon={<HealthIcon />}
        description="Hacks focused on increasing accessability in healthcare and encouraging choices to live a more balanced and fulfilling lifestyle."
      />
    </>
  )
}

export default MobileTracks
