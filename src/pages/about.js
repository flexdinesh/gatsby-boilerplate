import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/Layout'
import SEO from '@components/seo'

/* eslint-disable jsx-a11y/accessible-emoji */
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About me</h1>
    <p>The content for this page isn't ready yet. 🤷‍♂️</p>
    <p>
      You gotta make do with&nbsp;
      <span>
        <Link to="/">home</Link>
      </span>{' '}
      for now.
    </p>
  </Layout>
)
/* eslint-enable jsx-a11y/accessible-emoji */

export default AboutPage
