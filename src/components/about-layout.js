import React from "react"
import MainLayout from "../components/main-layout"
import AboutMenu from "../components/AboutMenu"
import { MDXProvider } from "@mdx-js/react"

const AboutLayout = ({ children }) => {
  return (
    <MainLayout title="Acerca de mi">
      <div className="main-content">
        <div className="content-container">
          <div className="sidebar">
            <AboutMenu />
          </div>
          <div className="inner-content">
            <MDXProvider
              components={{
                ul: props => <ul {...props} className="short-list" />,
              }}
            >
              {children}
            </MDXProvider>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default AboutLayout
