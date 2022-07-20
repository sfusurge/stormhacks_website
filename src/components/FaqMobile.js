import AllQuestions from '../components/AllQuestions'

import styles from '../css/FaqMobile.module.css'

const FaqMobile = props => {
  return (
    <>
      <p className={styles.heading}>FAQs</p>
      <AllQuestions />
    </>
  )
}

export default FaqMobile
