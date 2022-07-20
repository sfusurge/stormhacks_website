import { useState, useEffect } from 'react'
import { calculateTimeLeft, formatDoubleDigitTime } from '../utils/timeLeft'
import styles from '../css/CountdownTimer.module.css'

const getTime = dueDate => {
  const timeLeft = calculateTimeLeft(dueDate)

  if (timeLeft) {
    timeLeft.hours = formatDoubleDigitTime(timeLeft.hours)
    timeLeft.minutes = formatDoubleDigitTime(timeLeft.minutes)
    timeLeft.seconds = formatDoubleDigitTime(timeLeft.seconds)
  }

  return timeLeft
}

const ApplicationTimer = () => {
  const dueDate = '2021-02-20T21:00:00Z'
  const secondDueDate = '2021-02-21T21:00:00Z'
  const [timeLeft, setTimeLeft] = useState(getTime(dueDate))
  const [submissionTimeLeft, setSubmissionTimeLeft] = useState(
    getTime(secondDueDate)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTime(dueDate))
      setSubmissionTimeLeft(getTime(secondDueDate))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.countdown}>
        <>
          {submissionTimeLeft ? (
            timeLeft ? (
              <>
                <p className={styles.title}>Countdown to Hacking Begins:</p>
                <p className={styles.days}>
                  {timeLeft.days} {timeLeft.days === 1 ? `day` : `days`}
                </p>
                <p className={styles.timer}>
                  {timeLeft.hours} {timeLeft.hours === '01' ? `hr` : `hrs`},{' '}
                  {timeLeft.minutes}{' '}
                  {timeLeft.minutes === '01' ? `min` : `mins`},{' '}
                  {timeLeft.seconds}
                </p>
              </>
            ) : (
              <>
                <p className={styles.title}>
                  Countdown to Project Submissions:
                </p>
                <p className={styles.days}>
                  {submissionTimeLeft.days}{' '}
                  {submissionTimeLeft.days === 1 ? `day` : `days`}
                </p>
                <p className={styles.timer}>
                  {submissionTimeLeft.hours}{' '}
                  {submissionTimeLeft.hours === '01' ? `hr` : `hrs`},{' '}
                  {submissionTimeLeft.minutes}{' '}
                  {submissionTimeLeft.minutes === '01' ? `min` : `mins`},{' '}
                  {submissionTimeLeft.seconds}
                </p>
              </>
            )
          ) : (
            <>
              <p className={styles.title}>Submissions are now</p>
              <p className={styles.days}>CLOSED</p>
            </>
          )}
        </>
      </div>
    </div>
  )
}

export default ApplicationTimer
