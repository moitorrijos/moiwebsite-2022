import * as React from "react"
import Footer from "./footer"
import "typeface-raleway"
import Seo from './seo.js'
import Header from "./header"

const MainLayout = (props) => (
  <>
    <Seo title={props.title || 'Juan Moisés Torrijos'} />
    <div className="main-container">
      <Header />
      {props.children}
      <Footer />
    </div>
  </>
)

export default MainLayout

