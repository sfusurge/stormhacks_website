import styles from "../css/FaqQuestions.module.css"
import downArrow from "../assets/faqDropDownIcon.svg"

const FaqQuestions = props => {
 
  const toggleDropDown = () => {
    if (props.isOpen){
      return props.setOpen(-1)
    }
    return(
        props.setOpen(props.id)
    )
  }
    
  return (
    <div className={styles.container}>
      <div className={styles.question} onClick={toggleDropDown}>
        <p className={styles.text}>
          {props.question}
        </p>
        <div className={styles.arrow}>
          <img src={downArrow} alt="Drop Down"/>
        </div>
      </div>
     
      
      {props.isOpen && <div className={styles.answer}>
        {props.answer}
      </div>}
    </div>
    )
  }
  

  export default FaqQuestions