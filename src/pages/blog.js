import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import * as blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ul className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => (
          <li className={blogStyles.post} key={edge.node}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>{edge.node.title}</h2>
              <p>{edge.node.publishDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
    // const data = useStaticQuery(graphql`
    //   query {
    //     allMarkdownRemark {
    //       edges {
    //         node {
    //           frontmatter {
    //             title
    //             date
    //           }
    //           fields {
    //             slug
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)

    //   <Layout>
    //   <h1>Blog</h1>
    //   <ul className={blogStyles.posts}>
    //     {data.allMarkdownRemark.edges.map(edge => (
    //       <li className={blogStyles.post} key={edge.node}>
    //         <Link to={`/blog/${edge.node.fields.slug}`}>
    //           <h2>{edge.node.frontmatter.title}</h2>
    //           <p>{edge.node.frontmatter.date}</p>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </Layout>
  )
}

export default BlogPage
