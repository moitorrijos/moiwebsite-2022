import * as React from "react"
import Navigation from "./navigation"
import "typeface-raleway"
import "typeface-bebas-neue"
import "../styles/main.sass"

const Header = ({ page }) => (
  <div className={`header-image ${page === 'home' ? 'home-header' : ''}`}>
    <Navigation />
  </div>
)

export default Header
