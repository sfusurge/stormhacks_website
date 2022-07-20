import { useTheme } from '../utils/theme'

import MobileHeader from '../components/MobileHeader'
import AboutContext from '../components/AboutContext'
import EventTracks from '../components/EventTracks'
import FaqMobile from '../components/FaqMobile'
import MobileSponsors from '../components/MobileSponsors'
import MobileExec from '../components/MobileExecs'
import FooterMobile from '../components/FooterMobile'

import styles from '../css/TabletHome.module.css'

const TabletHome = props => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return (
    <div className={styles.container}>
      <MobileHeader />
      <AboutContext />
      <EventTracks />
      <FaqMobile />
      <MobileSponsors />
      <MobileExec />
      <FooterMobile />
    </div>
  )
}

export default TabletHome
