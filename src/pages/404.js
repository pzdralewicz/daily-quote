import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>NOT FOUND</h2>
    <span>You just hit a route that doesn&#39;t exist... the sadness.</span>
  </Layout>
)

export default NotFoundPage
