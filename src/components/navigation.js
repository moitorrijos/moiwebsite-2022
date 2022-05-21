import * as React from "react"
import { Link } from "gatsby"
import MoiTorrijosLogo from "./icons/moi-logo"
import acerca from "../assets/acerca-de-mi.svg"
import love from "../assets/love.svg"
import portfolio from "../assets/portfolio.svg"
// import blog from "../assets/blogging.svg"
import mail from "../assets/mail.svg"
import "../styles/_navigation.sass"

const Navigation = () => (
  <div className="navigation">
    <Link className="logo-nav" to="/">
      <MoiTorrijosLogo />
    </Link>
    <Link to="/acerca">
      <img src={acerca} alt="Acerca de mi" />
      De Mi
    </Link>
    <Link to="/servicios">
      <img src={love} alt="Mis Servicios" />
      Servicios
    </Link>
    <Link to="/trabajos">
      <img src={portfolio} alt="Mis Trabajos" />
      Trabajos
    </Link>
    <Link to="/contactame">
      <img src={mail} alt="Contáctame" />
      Contacto
    </Link>
  </div>
)

export default Navigation
