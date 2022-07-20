import styles from '../css/SocialsIcons.module.css'
const socials = [
  { link: 'mailto:info@stormhacks.com', id: 'mail' },
  { link: 'https://github.com/sfusurge', id: 'github' },
  { link: 'https://www.instagram.com/sfusurge/', id: 'instagram' },
  { link: 'https://www.facebook.com/sfusurge', id: 'facebook' },
  { link: 'https://www.linkedin.com/company/sfu-surge/', id: 'linkedin' }
]
const SocialsIcons = props => {
  return (
    <div className={styles.container}>
      {socials.map(({ link, id }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
        >
          <div className={styles.img} id={styles[id]} />
        </a>
      ))}
    </div>
  )
}

export default SocialsIcons
