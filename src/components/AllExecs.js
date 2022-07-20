import ExecMember from './ExecMember'
import styles from '../css/AllExecs.module.css'
import execs from '../utils/execList'

const execResolver = require.context('../assets/execs', false, /.*\.png/)

const BreakLine = ({ exec, idx }) => {
  return (
    <>
      {(idx !== 0 && idx % 4 === 0) && <span className={styles.line} />}
      <div className={styles.execs}>
        <ExecMember
          src={execResolver(exec.src).default}
          width={exec.width}
          height={exec.height}
          name={exec.name}
          link={exec.link}
          customStyle={exec.customStyle}
        />
      </div>
    </>
  )
}

const AllExecs = props => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        {execs.map((exec, i) => <BreakLine exec={exec} idx={i} key={exec.name} />)}
      </div>
    </div>
  )
}

export default AllExecs
