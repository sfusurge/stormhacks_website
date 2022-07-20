import styles from '../css/Banner.module.css'

const Banner = props => {
  return (
    <div className={styles.container} style={{ width: `${props.width}px` }}>
      {props.surge && (
        <a
          href="https://www.facebook.com/sfusurge/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.bannerImage}
            src={props.surge.src}
            alt={props.surge.alt}
            width={props.surge.width}
            height={props.surge.height}
          />
        </a>
      )}
      {props.mlh && (
        <a
          href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.bannerImage}
            src={props.mlh.src}
            alt={props.mlh.alt}
            width={props.mlh.width}
            height={props.mlh.height}
          />
        </a>
      )}
    </div>
  )
}

export default Banner
