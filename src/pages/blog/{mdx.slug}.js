import React from "react"
import MainLayout from "../../components/main-layout"
import SocialSidebar from "../../components/social-sidebar.js"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "../../styles/_blog.sass"

const BlogPost = ({ data }) => {
  const { mdx } = data
  return (
    <MainLayout>
      <div className="main-content">
        <div className="blog-columns">
          <SocialSidebar />
          <article className="post">
            <h2>{mdx.frontmatter.title}</h2>
            <p className="date">Publicado el {mdx.frontmatter.date}</p>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </article>
        </div>
      </div>
    </MainLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`

export default BlogPost
