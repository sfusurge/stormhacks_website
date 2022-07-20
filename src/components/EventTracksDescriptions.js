const EventTracksDescriptions = props => {
  return(
    <div className = {props.styles.descriptionsContainer}>
      <div className = {props.styles.titleContainer}>
        <p className = {props.styles.headerFont}>
          {props.title}
        </p>
        <p className = {props.styles.paragraph}> 
          {props.paragraph}
        </p>
      </div>
      <div className = {props.img}/>
    </div>
  )
}
export default EventTracksDescriptions