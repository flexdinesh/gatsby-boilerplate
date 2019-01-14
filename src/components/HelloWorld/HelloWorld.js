import PropTypes from 'prop-types'
import React from 'react'
import styles from './HelloWorld.module.scss'
import { StaticQuery, graphql } from 'gatsby'

const HelloWorld = ({ siteMetadata, greetings }) => (
  <div className={styles.container}>
    <h1 className={styles.name}>
      {siteMetadata.title} | {siteMetadata.fullName}
    </h1>
    <div>{greetings}</div>
  </div>
)

HelloWorld.propTypes = {
  siteMetadata: PropTypes.object,
  greetings: PropTypes.string,
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            fullName
          }
        }
        allJavascriptFrontmatter {
          edges {
            node {
              frontmatter {
                staticData {
                  greet
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <HelloWorld
        siteMetadata={data.site.siteMetadata}
        greetings={
          data.allJavascriptFrontmatter.edges[0].node.frontmatter.staticData
            .greet
        }
      />
    )}
  />
)
