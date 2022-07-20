import { useEffect, useState, useRef } from "react"
import _ from "lodash"
import getIndex from "../utils/indexManager"

import styles from "../css/Modal.module.css"

import { ReactComponent as Close } from "../assets/modal/close.svg"
import { ReactComponent as Maximize } from "../assets/modal/maximize.svg"
import { ReactComponent as Minimize } from "../assets/modal/minimize.svg"


const Modal = ({ children, origin, title, onClose }) => {
  const [nodeLocation, setNodeLocation] = useState({ x: origin?.x ?? 0, y: origin?.y ?? 0 })
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [index, setIndex] = useState(1)
  const container = useRef(null)

  const registerMouse = event => {
    if (event.button !== 0) return
    event.preventDefault()
    event.stopPropagation()
    setDragging(true)
    setMouseLocation({
      x: event.clientX,
      y: event.clientY
    })
    setIndex(getIndex())
  }

  const unRegisterMouse = event => {
    event.preventDefault()
    event.stopPropagation()
    setDragging(false)
  }

  const mouseMoveHandler = _.throttle(event => {
    event.preventDefault()
    event.stopPropagation()

    const { current: node } = container

    if (!node) return

    const mouseDelta = {
      x: (event.clientX - mouseLocation.x),
      y: (event.clientY - mouseLocation.y)
    }

    const deltaBox = {
      left: nodeLocation.x + mouseDelta.x,
      top: nodeLocation.y + mouseDelta.y,
      right: node.offsetWidth + nodeLocation.x + mouseDelta.x,
      bottom: node.offsetHeight + nodeLocation.y + mouseDelta.y
    }

    const newLoc = { ...nodeLocation }

    if (mouseDelta.x > 0) {
      // move right && less than width
      if (deltaBox.right < window.innerWidth) {
        newLoc.x = deltaBox.left
      } else {
        newLoc.x = window.innerWidth - node.offsetWidth
      }
    } else if (mouseDelta.x < 0) {
      // move left && greater than 0
      if (deltaBox.left > 0) {
        newLoc.x = deltaBox.left
      } else {
        newLoc.x = 0
      }
    }

    if (mouseDelta.y > 0) {
      // move down && less than height
      if (deltaBox.bottom < window.innerHeight) {
        newLoc.y = deltaBox.top
      } else {
        newLoc.y = window.innerHeight - node.offsetHeight
      }
    } else if (mouseDelta.y < 0) {
      // move up && greater tahn 0
      if (deltaBox.top > 0) {
        newLoc.y = deltaBox.top
      } else {
        newLoc.y = 0
      }
    }

    setMouseLocation({
      x: event.clientX,
      y: event.clientY
    })
    setNodeLocation(newLoc)
  }, 15)


  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', unRegisterMouse)
      return () => {
        document.removeEventListener('mousemove', mouseMoveHandler)
        document.removeEventListener('mouseup', unRegisterMouse)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging])

  useEffect(() => {
    setIndex(getIndex())
  }, [])

  return (
    <div
      className={styles.container}
      style={{
        left: `${nodeLocation.x}px`,
        top: `${nodeLocation.y}px`,
        zIndex: index
      }}
      ref={container}
    >
      <div className={styles.main}>
        {children}
      </div>
      <div className={styles.topBar} onMouseDown={registerMouse}>
        <p className={styles.title}>{title}</p>
        <div className={styles.topButtons} >
          <Minimize className={styles.minimize} />
          <Maximize className={styles.maximize} />
          <Close className={styles.close} onClick={onClose} />
        </div>
      </div>
    </div>
  )
}

export default Modal