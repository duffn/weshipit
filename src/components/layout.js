import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <img src="/weshipit.gif" alt="weshipit.xyz" />
    </>
  )
}

export default Layout
