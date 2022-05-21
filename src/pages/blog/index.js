import * as React from "react"
import MainLayout from "../../components/main-layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import SocialSidebar from "../../components/social-sidebar.js"
import "../../styles/_blog.sass"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "post" } } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 520)
            slug
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  return (
    <MainLayout>
      <div className="main-content">
        <div className="blog-columns">
          <SocialSidebar />
          <div className="posts-content">
            {data.allMdx.edges.map((post) => {
              return (
                <article className="post" key={post.node.id}>
                  <Link to={post.node.slug} className="blog-link-header">
                    <h2>{post.node.frontmatter.title}</h2>
                  </Link>
                  <p className="date">
                    Publicado el {post.node.frontmatter.date}
                  </p>
                  <p>
                    {post.node.excerpt}{" "}
                    <Link to={post.node.slug}>Lea más.</Link>
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BlogPage
