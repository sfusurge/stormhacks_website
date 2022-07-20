import ExecMember from './ExecMember'
import styles from '../css/MobileExec.module.css'
import execs from '../utils/execList'

const execResolver = require.context('../assets/execs', false, /.*\.png/)

const MobileExecs = props => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Meet The Execs</p>
      <div className={styles.execContainer}>
        {execs.map(exec => (
          <div className={styles.execs} key={exec.name}>
            <ExecMember
              src={execResolver(exec.src).default}
              width={exec.width}
              height={exec.height}
              name={exec.name}
              link={exec.link}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileExecs
