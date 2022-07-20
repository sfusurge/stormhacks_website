import ApplicationTimer from './ApplicationTimer'
import SideBarEvent from './SideBarEvent'

import styles from '../css/SideBar.module.css'

import itinerary from '../utils/eventList'

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <p className={styles.title}>Schedule</p>
        </div>
        <ApplicationTimer />
        {itinerary.map(({ date, events }) => (
          <SideBarEvent key={date} date={date} events={events} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
