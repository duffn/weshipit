import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            gifUrl
          }
        }
      }
    `
  )

  const pageTitle = title || site.siteMetadata.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      meta={[
        {
          property: `og:image`,
          content: site.siteMetadata.gifUrl,
        },
        // {
        //   property: `og:url`,
        //   content: site.siteMetadata.gifUrl,
        // },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
