import React from 'react'
import { graphql } from 'gatsby'

import * as S from './blog-post.styles'
import { Layout } from 'components/Layout'
import { SEO } from 'components/SEO'

type BlogPostProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        date: string
      }
      html: string
      timeToRead: string | number
    }
  }
}

export default function BlogPost({ data }: BlogPostProps) {
  const {
    html,
    timeToRead,
    frontmatter: { title, description, date }
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} />
      <S.Header>
        <S.Date>
          {date} &centerdot; {timeToRead} minutes of reading
        </S.Date>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Header>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainContent>
    </Layout>
  )
}

export const query = graphql`
  query GET_POST_DATA($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date(locale: "en-us", formatString: "MMMM DD [of] YYYY")
      }
      html
      timeToRead
    }
  }
`
