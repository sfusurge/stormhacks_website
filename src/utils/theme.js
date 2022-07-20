import { useEffect, useState } from 'react'

const listeners = {}
let theme = 'light'

const toggleTheme = () => {
  theme = theme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.theme = theme

  Object.values(listeners).forEach(listener => listener(theme))
}

let lid = 0
const useTheme = () => {
  const [state, setState] = useState(theme)

  useEffect(() => {
    // component did mount
    const id = lid++
    listeners[id] = setState

    return () => {
      // component will unmount
      delete listeners[id]
    }
  }, [])

  return state
}

export default toggleTheme

export { useTheme }
