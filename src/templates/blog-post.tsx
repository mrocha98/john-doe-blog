import React from 'react'
import { graphql } from 'gatsby'

type BlogPostProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
      }
      html: string
    }
  }
}

export default function BlogPost({ data }: BlogPostProps) {
  const {
    html,
    frontmatter: { title }
  } = data.markdownRemark

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const query = graphql`
  query GET_POST_DATA($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`
