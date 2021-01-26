import React from 'react'
import { graphql } from 'gatsby'

import * as S from './blog-post.styles'
import { Layout } from 'components/Layout'
import { SEO } from 'components/SEO'
import { RecommendPosts } from 'components/RecommendPosts'
import { Comments } from 'components/Comments'

type PostData = {
  title: string
  description: string
  date: string
  image?: {
    publicURL: string
  }
}

type RecommendData = {
  frontmatter: Pick<PostData, 'title'>
  fields: {
    slug: string
  }
}

type BlogPostProps = {
  data: {
    markdownRemark: {
      frontmatter: PostData
      html: string
      timeToRead: string | number
    } & Pick<RecommendData, 'fields'>
  }
  pageContext: {
    nextPost?: RecommendData
    previousPost?: RecommendData
  }
}

export default function BlogPost({ data, pageContext }: BlogPostProps) {
  const {
    html,
    timeToRead,
    frontmatter,
    fields: { slug }
  } = data.markdownRemark

  const { nextPost, previousPost } = pageContext
  const { title, description, date, image } = frontmatter

  return (
    <Layout>
      <SEO title={title} description={description} image={image?.publicURL} />
      <S.Header>
        <S.Date>
          {date} &bull; {timeToRead} minutes of reading
        </S.Date>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Header>
      <S.MainContent>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainContent>
      <RecommendPosts previous={previousPost} next={nextPost} />
      <Comments url={slug} title={title} />
    </Layout>
  )
}

export const query = graphql`
  query GET_POST_DATA($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "en-us", formatString: "MMMM DD [of] YYYY")
        image {
          publicURL
        }
      }
      html
      timeToRead
    }
  }
`
