import styles from "../css/EventTracksHeader.module.css"


const EventTracksHeader = props => {
  return(
    <>
      <p className = {styles.headerFont}>
        Stuck on a creative block?
      </p>
      <p className = {styles.subHeaderFont}> 
        Event Tracks are here to help!
      </p>
      <p className = {styles.paragraph}>
        There are endless possibilities of what your project could be, which can be overwhelming 
        if you have a lot of topics that you’re passionate about. Our Event Tracks aren’t mandatory 
        categories to fit your projects into, but we’ve listed a couple of areas to help you frame 
        and expand your ideas.
      </p>
    </>
  )
}

export default EventTracksHeader