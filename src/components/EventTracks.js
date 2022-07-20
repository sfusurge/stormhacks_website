import EventTracksHeader from './EventTracksHeader.js'
import EventTracksDescriptions from './EventTracksDescriptions.js'
import styles from "../css/EventTracks.module.css"

const EventTracks = props => {
  const description1 = 'Hacks focused on creating tools to build community and cultivate relationships in a digital environment.'
  const description2 = 'Hacks focused on creating solutions for a more sustainable future and leaving a positive footprint on the environment.'
  const description3 = 'Hacks focused on increasing accessability in healthcare and encouraging choices to live a more balanced and fulfilling lifestyle.'
  return(
    <div className = {styles.container}>
      <EventTracksHeader/>
      <EventTracksDescriptions title = {'Connections & Digital Interactions'}
      paragraph = {description1} styles = {styles} img = {styles.connectionsTrackImg}/>
      <EventTracksDescriptions title = {'Environment & Sustainability'}
      paragraph = {description2} styles = {styles} img = {styles.environmentImg}/>
      <EventTracksDescriptions title = {'Health & Wellness'}
      paragraph = {description3} styles = {styles} img = {styles.healthImg}/>
    </div>
  )
}

export default EventTracks