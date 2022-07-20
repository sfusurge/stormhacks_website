import { useState } from 'react'
import { calculateTimeLeft } from '../utils/timeLeft'
import styles from '../css/CommandLine.module.css'
import Typist from 'react-typist'

const CommandLine = () => {
  const beforeDeadline = calculateTimeLeft('2021-01-25T08:00:00Z')
  const [secondMsg, setMsg] = useState(false)
  const redirect = () => {
    window.open('https://stormhacks.typeform.com/to/GWfDap3w', '_blank')
    setMsg(true)
  }

  return (
    <div className={styles.container}>
      <p className={styles.noMargin}> Surge Windows [Version 1.1]</p>
      <p className={styles.padBottom}>(c) 2020 StormHacks Corporation. </p>
      <p className={styles.noMargin}>
        C:\Users\Developer: Surge Activate Developer
      </p>
      {beforeDeadline ? (
        <>
          <Typist
            className={styles.typist}
            avgTypingDelay={1}
            stdTypingDelay={10}
            cursor={{
              show: true,
              blink: false,
              element: '▌',
              hideWhenDone: true,
              hideWhenDoneDelay: 0
            }}
            onTypingDone={redirect}
          >
            <span className={styles.fontAnimated}>
              Activating the registration for current User. Please wait...
            </span>
            <br />
            <span className={styles.fontAnimated}>
              01010011 01010100 01001111 01010010 01001101 00100000 01001000
              01000001 01000011 01001011 01010011 00100001
            </span>
            <br />
            <span className={styles.fontAnimated}>Processing </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <br />
            <span className={styles.fontAnimated}>Opening application</span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
            <Typist.Delay ms={200} />
            <span className={styles.fontAnimated}> . </span>
          </Typist>

          {secondMsg && (
            <Typist
              className={styles.typist}
              avgTypingDelay={1}
              stdTypingDelay={10}
              cursor={{
                show: true,
                blink: false,
                element: '▌',
                hideWhenDone: false
              }}
            >
              <br />
              <br />
              <Typist.Delay ms={500} />
              <span className={styles.fontAnimated}>
                If the application form has not appeared, please make sure that
                pop-ups are enabled or click the following link:
              </span>
              <br />
              <a
                href="https://stormhacks.typeform.com/to/GWfDap3w"
                target="_blank"
                rel="noreferrer"
                className={styles.linkAnimated}
              >
                https://stormhacks.typeform.com/to/GWfDap3w
              </a>
              <br />
            </Typist>
          )}
        </>
      ) : (
        <Typist
          className={styles.typist}
          avgTypingDelay={1}
          stdTypingDelay={10}
          cursor={{
            show: true,
            blink: false,
            element: '▌',
            hideWhenDone: true,
            hideWhenDoneDelay: 0
          }}
        >
          <span className={styles.fontAnimated}>
            Activating the registration for current User. Please wait...
          </span>
          <br />
          <span className={styles.fontAnimated}>
            01010011 01010100 01001111 01010010 01001101 00100000 01001000
            01000001 01000011 01001011 01010011 00100001
          </span>
          <br />
          <span className={styles.fontAnimated}>Processing </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <br />
          <span className={styles.fontAnimated}>Opening application</span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <Typist.Delay ms={200} />
          <span className={styles.fontAnimated}> . </span>
          <br />
          <br />
          <span className={styles.fontAnimated}>
            Sorry applications closed on 24 January at 11:59 PM PST.
          </span>
          <br />
          <span className={styles.fontAnimated}>
            Please email info@stormhacks.com for more information.
          </span>
        </Typist>
      )}
    </div>
  )
}
export default CommandLine
