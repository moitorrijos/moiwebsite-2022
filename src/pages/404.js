import * as React from "react"
import MainLayout from "../components/main-layout"

const Acerca = () => (
  <MainLayout title="Error 404">
    <div className="main-content">
      <div className="flex align-items-center gap-1">
        <h1>Error 404</h1>
        <p>Esta página no existe o fue reubicada. Disculpa las molestias.</p>
      </div>
    </div>
  </MainLayout>
)

export default Acerca
