import styles from '../css/ExecMember.module.css'
const ExecMember = ({ name, src, width, height, link, customStyle }) => {
  return (
    <a
      className={styles.link}
      style={customStyle}
      target="_blank"
      rel="noreferrer"
      href={link}
    >
      <div className={styles.container}>
        <img
          className={styles.img}
          src={src}
          width={width}
          height={height}
          alt={`${name}`}
        />
        <p className={styles.name}>{name}</p>
      </div>
    </a>
  )
}

export default ExecMember
