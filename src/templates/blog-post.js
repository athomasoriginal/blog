import React from 'react'
import Layout from '../components/layout'

import { graphql, Link } from 'gatsby'

import './blog-post.css'

export default ({ data }) => {
  const siteMetadata = data.site.siteMetadata
  const post = data.markdownRemark

  return (
    <Layout>
      <Link className="site-title" to={'/'}>
        {siteMetadata.title}
      </Link>
      <h2 className="article__title">{post.frontmatter.title}</h2>
      <p className="article-index-item__meta">
        <span className="hide">posted on</span>
        <time>{post.frontmatter.date}</time>
      </p>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
