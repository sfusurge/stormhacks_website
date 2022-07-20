import Banner from '../components/Banner'
import ToggleButton from "../components/ToggleButton"

import styles from '../css/DesktopPromo.module.css'

import surgeBanner from '../assets/surge-banner.svg'
// import mlhBanner from '../assets/mlh-banner.svg'
import signUp from '../assets/sign-up-button.svg'
import sparky from '../assets/sparky-wave.svg'
import stormy from '../assets/stormy-laying.svg'

const DesktopPromo = props => {
  return (
    <div className={styles.container}>
      <div className={styles.banners}>
        <Banner
          width="207"
          surge={{
            src: surgeBanner,
            alt: 'Surge Banner',
            width: '84px',
            height: '164px'
          }}
          mlh={{
            src: mlhBanner,
            alt: 'MLH Banner',
            width: '93px',
            height: '163px'
          }}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.logo}></div>
        <div className={styles.textContainer}>
          <p className={styles.title}>Planning StormHacks...</p>
          <p className={styles.date}>February 20-21, 2021</p>
          <div className={styles.otters}>
            <img className={styles.sparky} src={sparky} alt="Sparky" />
            <img className={styles.stormy} src={stormy} alt="Stormy" />
          </div>
          <form
            className={styles.signUpForm}
            action="https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&amp;id=736d801cb8"
            method="post"
            name="mc-embedded-subscribe-form"
            target="_blank"
            noValidate
          >
            <input
              className={styles.signUpInput}
              type="email"
              name="EMAIL"
              placeholder="Enter your email address to stay up to date!"
              noValidate
            />
            <div style={{ display: 'none', tabindex: '-1' }} aria-hidden="true">
              <input
                type="text"
                name="b_33345c9bc17f10bac6afdd0ac_736d801cb8"
                defaultValue=""
              />
              <input defaultValue="Subscribe" name="subscribe" />
              <input defaultValue="StormHacks" name="MMERGE3" />
            </div>
            <button className={styles.signUpButton} type="submit">
              <img
                className={styles.signUpIcon}
                src={signUp}
                alt="Sign Up Button"
              />
            </button>
          </form>
        </div>
      </div>
      <div className={styles.toggleWrapper}>
        <ToggleButton />
      </div>
    </div>
  )
}

export default DesktopPromo
