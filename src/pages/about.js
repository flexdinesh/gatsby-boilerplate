import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/Layout'
import SEO from '@components/seo'

/* eslint-disable jsx-a11y/accessible-emoji */
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>Content for about section goes here 🥳</p>
    <p>
      You can go back&nbsp;
      <span>
        <Link to="/">home</Link>
      </span>
      .
    </p>
  </Layout>
)
/* eslint-enable jsx-a11y/accessible-emoji */

export default AboutPage
