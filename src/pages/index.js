import React from 'react'
import Layout from '@components/Layout'
import SEO from '@components/seo'
import HelloWorld from '@components/HelloWorld'

const IndexPage = ({ data }) => (
  <Layout showHome={false}>
    <SEO
      title="Dinesh Pandiyan"
      keywords={[`developer`, `engineer`, `react`, `javascript`]}
    />
    <HelloWorld />
  </Layout>
)

export default IndexPage
