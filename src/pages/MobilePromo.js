import Banner from '../components/Banner'
import ToggleButton from "../components/ToggleButton"
import surgeBanner from '../assets/surge-banner.svg'
import signUp from '../assets/sign-up-button.svg'
// import mlhBanner from '../assets/mlh-banner.svg'
import styles from '../css/MobilePromo.module.css'

const MobilePromo = props => {
  return (
    <div className={styles.container}>
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
        // mlh={{
        //   src: mlhBanner,
        //   alt: 'MLH Banner',
        //   width: '50px',
        //   height: '87px'
        // }}
        />
      </div>
      <div className={styles.box}>
        <div className={styles.title}>
          {"Planning StormHacks..."}
        </div>
        <div className={styles.subtitle}>
          {"February 20 - 21, 2021"}
        </div>
        <div className={styles.otter} />
        <form className={styles.input}
          action="https://gmail.us4.list-manage.com/subscribe/post?u=33345c9bc17f10bac6afdd0ac&amp;id=736d801cb8"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate>
          <input
            className={styles.textBox}
            type="email"
            name="EMAIL"
            placeholder="Enter your email address to stay up to date!"
            noValidate
          />
          <div style={{ display: 'none', tabindex: '-1' }} aria-hidden="true">
            <input
              type="text"
              name="b_33345c9bc17f10bac6afdd0ac_736d801cb8"
              value=""
            />
            <input value="Subscribe" name="subscribe" />
            <input value="StormHacks" name="MMERGE3" />
          </div>
          <button className={styles.button} type-="submit">
            <img
              className={styles.signUpIcon}
              src={signUp}
              alt="Sign Up Button"
            />
          </button>
        </form>

      </div>

      <div className={styles.logo} />

    </div>
  )
}

export default MobilePromo
