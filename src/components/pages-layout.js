import * as React from "react"
import MainLayout from "../components/main-layout"

const PageLayout = ({ title = 'Juan Moises Torrijos', children }) => (
  <MainLayout title={title} >
    <div className="main-content">
      <div className="full-width-content">
        { children }
      </div>
    </div>
  </MainLayout>
)

export default PageLayout
