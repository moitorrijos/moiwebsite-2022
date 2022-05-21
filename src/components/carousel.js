import React, { useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/_carousel.sass"
import prev_icon from "../assets/prev-icon.svg"
import next_icon from "../assets/next-icon.svg"

const Carousel = () => {
  let [position, setPosition] = useState(0)
  let ref = useRef(null)
  let displacement = ref.current ? ref.current.offsetWidth : 0
  function moveRight() {
    setPosition((position += 1))
    if (position > 4) {
      setPosition((position = 0))
    }
  }
  function moveLeft() {
    setPosition((position -= 1))
    if (position < 1) {
      setPosition((position = 0))
    }
  }
  return (
    <div className="container">
      <button
        className="carousel prev"
        onClick={moveLeft}
        aria-label="Previous slide button"
      >
        <img src={prev_icon} alt="Previous" />
      </button>
      <button
        className="carousel next"
        onClick={moveRight}
        aria-label="Next slide button"
      >
        <img src={next_icon} alt="Next" />
      </button>
      <div className="inner-container" ref={ref}>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <StaticImage src="../assets/trabajos/servidores-rapidos.png" alt="Servidores Rápidos" />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <StaticImage src="../assets/trabajos/concordsecurity.png" alt="Concord Security" />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <StaticImage src="../assets/trabajos/cotizame-website.png" alt="ICSClass" />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <StaticImage
            src="../assets/trabajos/wordcamp-panama-2019-screen-fullsize.png"
            alt="WordCamp Website"
          />
        </div>
        <div
          className="card"
          style={{ transform: `translateX(${-displacement * position}px)` }}
        >
          <StaticImage src="../assets/trabajos/intermaritime-org-screen-fullsize.png" alt="InterMaritime Website" />
        </div>
      </div>
      <div className="positions">
        <span className={position === 0 ? "current-position" : ""}></span>
        <span className={position === 1 ? "current-position" : ""}></span>
        <span className={position === 2 ? "current-position" : ""}></span>
        <span className={position === 3 ? "current-position" : ""}></span>
        <span className={position === 4 ? "current-position" : ""}></span>
      </div>
    </div>
  )
}

export default Carousel
