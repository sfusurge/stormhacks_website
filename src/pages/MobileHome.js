import MobileHeader from '../components/MobileHeader'
import MobileSponsors from '../components/MobileSponsors'
import MobileTracks from '../components/MobileTracks'
import MobileIntroduction from '../components/MobileIntroduction'
import FaqMobile from '../components/FaqMobile'
import MobileExec from '../components/MobileExecs'
import FooterMobile from '../components/FooterMobile'

import styles from '../css/MobileHome.module.css'

const MobileHome = props => {
  return (
    <div className={styles.container}>
      <MobileHeader />
      <MobileIntroduction />
      <MobileTracks />
      <FaqMobile />
      <MobileSponsors />
      <MobileExec />
      <FooterMobile />
    </div>
  )
}

export default MobileHome
