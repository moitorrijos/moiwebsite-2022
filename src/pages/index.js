import * as React from "react"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Services from "../components/home/services"
import Portfolio from "../components/home/portfolio"
import Footer from "../components/footer"
import "../styles/main.sass"

const Index = () => (
  <>
    <Seo title="Juan Moisés Torrijos Diseñador y Programador Web" />
    <Hero />
    <div className="main-content home-content">
      <h2 className="centered reg-ch tall-line regular body-font">
        ¡Hola! mi nombre es <strong>Juan Moisés Torrijos</strong>, soy{" "}
        <strong>diseñador y desarrollador</strong>&nbsp; de{" "}
        <strong>sitios y aplicaciones para la web</strong>, en la Ciudad de
        Panamá{" "}
        <span role="img" aria-label="Panama Flag">
          🇵🇦
        </span>
      </h2>
      <Services />
      <Portfolio />
    </div>
    <Footer />
  </>
)

export default Index
