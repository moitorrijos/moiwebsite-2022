import * as React from "react"
import Header from "./header"
import Seo from './seo.js'
import Footer from "./footer"

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

