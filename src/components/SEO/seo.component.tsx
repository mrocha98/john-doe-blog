import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type MetaData = {
  name?: string
  property?: string
  content?: string
}

export type SEOProps = {
  title: string
  description?: string
  image?: string
  lang?: string
  meta?: MetaData[]
}

export const SEO = ({
  title,
  description,
  image,
  lang = 'en',
  meta = []
}: SEOProps) => {
  const { site } = useStaticQuery<StaticData>(
    graphql`
      query GET_SEO_DATA {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const url = site.siteMetadata.siteUrl
  const ogImage = `${url}${image || '/assets/img/cover.png'}`

  const defaultMeta: MetaData[] = [
    {
      name: `description`,
      content: metaDescription
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: metaDescription
    },
    {
      property: `og:image`,
      content: ogImage
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`
    },
    {
      name: `twitter:image:src`,
      content: ogImage
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.author || ``
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: metaDescription
    }
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={defaultMeta.concat(meta)}
    />
  )
}

type StaticData = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author?: string
      siteUrl: string
    }
  }
}
