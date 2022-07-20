import styles from '../css/Sponsor.module.css'

const Sponsor = ({ name, src, width, height, link }) => {
  return (
    <div className={styles.container}>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          className={styles.img}
          src={src}
          width={width}
          height={height}
          alt={`Logo of ${name}`}
        />
      </a>
    </div>
  )
}

export default Sponsor
