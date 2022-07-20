import DesktopFile from '../components/DesktopFile.js'

import AboutContext from './AboutContext'
import EventTracks from './EventTracks'
import AllQuestions from './AllQuestions'
import SponsorsContent from './SponsorsContent'
import CommandLine from './CommandLine'
import PastEvents from './PastEvents'

import styles from '../css/FileIconGroup.module.css'

import About from '../assets/aboutFileIcon.svg'
import Tracks from '../assets/tracksFileIcon.svg'
import Sponsors from '../assets/sponsorsFileIcon.svg'
import Terminal from '../assets/terminalFileIcon.svg'
import Faq from '../assets/faqFileIcon.svg'
import Events from '../assets/pastEventsFileIcon.svg'

const FileIconGroup = () => {
  return (
    <div className={styles.container}>
      <DesktopFile
        icon={About}
        Content={AboutContext}
        text="What is StormHacks"
      />
      <DesktopFile icon={Tracks} Content={EventTracks} text="Event Tracks" />
      <DesktopFile icon={Sponsors} Content={SponsorsContent} text="Sponsors" />
      <DesktopFile icon={Terminal} Content={CommandLine} text="Apply.exe" />
      <DesktopFile icon={Faq} Content={AllQuestions} text="FAQ" />
      <DesktopFile icon={Events} Content={PastEvents} text="Past Events" />
    </div>
  )
}
export default FileIconGroup
