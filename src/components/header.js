import * as React from "react"
import Navigation from "./navigation"
import "../styles/_header.sass"

const Header = ({ page }) => (
  <div className={`header-image ${page === 'home' ? 'home-header' : ''}`}>
    <Navigation />
  </div>
)

export default Header
