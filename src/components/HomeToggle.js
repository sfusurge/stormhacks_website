import { useState, useEffect } from 'react'
import _ from 'lodash'

import MobileHome from '../pages/MobileHome'
import DesktopHome from '../pages/DesktopHome'
import TabletHome from '../pages/TabletHome'

const tabletbreakpoint = 600
const desktopBreakpoint = 900
const Home = props => {
  const [mode, setMode] = useState('desktop')

  const findMode = () => {
    if (window.innerWidth < tabletbreakpoint && mode !== 'mobile') {
      setMode('mobile')
    } else if (
      window.innerWidth >= tabletbreakpoint &&
      window.innerWidth < desktopBreakpoint &&
      mode !== 'tablet'
    ) {
      setMode('tablet')
    } else if (window.innerWidth >= desktopBreakpoint && mode !== 'desktop') {
      setMode('desktop')
    }
  }

  useEffect(() => {
    const handleResize = _.throttle(findMode, 15)

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode])

  useEffect(() => {
    findMode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (mode === 'mobile') {
    return <MobileHome {...props} />
  } else if (mode === 'tablet') {
    return <TabletHome {...props} />
  } else {
    return <DesktopHome {...props} />
  }
}

export default Home
