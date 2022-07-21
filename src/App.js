import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import toggleTheme from './utils/theme'


import HomeToggle from './components/HomeToggle'
import styles from './css/App.module.css'

const App = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      toggleTheme()
    }
  }, [])

  return (
    <div id={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeToggle />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
