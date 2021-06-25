import React from "react"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.title
        const url = node.data.target.fixed.src
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishDate}</p>
      {renderRichText(data.contentfulBlogPost.body, options)}
    </Layout>

    // export const query = graphql`
    //   query($slug: String!) {
    //     markdownRemark(fields: { slug: { eq: $slug } }) {
    //       frontmatter {
    //         title
    //         date
    //       }
    //       html
    //     }
    //   }
    // `

    // <Layout>
    //   <h1>{data.markdownRemark.frontmatter.title}</h1>
    //   <p>{data.markdownRemark.frontmatter.date}</p>
    //   <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    // </Layout>
  )
}

export default Blog
