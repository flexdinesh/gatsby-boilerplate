import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import styles from './blog-post.module.scss'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <div className={styles.date}>{post.frontmatter.date}</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
