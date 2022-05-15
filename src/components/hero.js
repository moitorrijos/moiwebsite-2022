import * as React from "react"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "../styles/_hero.sass"

const Hero = () => {
  return (
    <div className="main-hero">
      <Header page="home" />
      <div className="hero-text-image">
        <div className="hero-text">
          <h2>Experto en Creación de</h2>
          <h1>Sitios y Aplicaciones Web</h1>
          <ul>
            <li>eCommerce</li>
            <li>Sitios y Apps Web</li>
            <li>Apps Móviles</li>
          </ul>
          <div className="buttons">
            <Link to="/contactame"
              className="hero-button"
            >
              Contáctame
            </Link>
            <Link to="/trabajos">
              Conoce Mis Trabajos
            </Link>
          </div>
        </div>
        <StaticImage src="../assets/juan-moises-torrijos-2020-3.png" alt="Juan Moisés Torrijos" /> 
      </div>
    </div>
  )
}

export default Hero
