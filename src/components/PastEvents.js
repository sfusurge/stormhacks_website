import styles from '../css/PastEvents.module.css'
const imageResolver = require.context(
  '../assets/eventPictures',
  false,
  /.*\.png/
)

const imgs2020 = [
  './2020_1.png',
  './2020_2.png',
  './2020_3.png',
  './2020_4.png',
  './2020_5.png'
]

const imgs2019 = [
  './2019_1.png',
  './2019_2.png',
  './2019_3.png',
  './2019_4.png',
  './2019_5.png'
]

const PastEvents = props => {
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p className={styles.headerText}>
          SFU Surge has held 25 events since it’s inception in September 2019,
          engaging 700+ students interested in tech. We hope to continue this
          mission with StormHacks 2021!
        </p>
        <div className={styles.menu}>
          <div className={styles.subHeaderText}>
            <p className={styles.viewBy}>View by:</p>
            <p className={styles.viewBy}> Date taken</p>
          </div>
          <div className={styles.gridBtn}>
            <div className={styles.gridIcon} />
            <span className={styles.orangeOutline}></span>
          </div>
        </div>
        <p className={styles.date}>2020</p>
        <div className={styles.images2020}>
          {imgs2020.map((pic, i) => (
            <img
              key={pic}
              className={styles[`img${i + 1}`]}
              src={imageResolver(pic).default}
              alt={`Surge pictures ${i + 1}_2020`}
            />
          ))}
        </div>
        <p className={styles.date}>2019</p>
        <div className={styles.images2019}>
          {imgs2019.map((pic, i) => (
            <img
              key={pic}
              className={styles[`img${i + 1}_19`]}
              src={imageResolver(pic).default}
              alt={`Surge pictures ${i + 1}_2019`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PastEvents
