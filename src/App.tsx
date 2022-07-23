import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import styles from './App.module.scss'

import ThemeProvider from './context/Theme'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Schedule from './pages/Schedule'
import About from './pages/About'
import FAQ from './pages/Faq'
import Themes from './pages/Themes'
import Sponsors from './pages/Sponsors'
import ScrollProvider from './context/Scroll'
import ScrollContainer from './components/ScrollContainer'

function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <ScrollContainer>
          <div className={styles.App}>
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/themes" element={<Themes />} />
              </Routes>
              <Footer />
            </Router>
          </div>
        </ScrollContainer>
      </ScrollProvider>
    </ThemeProvider>
  )
}

export default App
