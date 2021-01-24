import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout } from 'components/Layout'
import { SEO } from 'components/SEO'
import { PostItem } from 'components/PostItem'

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery<Data>(graphql`
    query PostList {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(locale: "en-us", formatString: "MMMM DD [of] YYYY")
              description
              category
              background
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
      {postList.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: { title, description, category, date, background },
              timeToRead
            }
          },
          index
        ) => (
          <PostItem
            key={index}
            slug={slug}
            title={title}
            description={description}
            category={category}
            date={date}
            background={background}
            timeToRead={timeToRead}
          />
        )
      )}
    </Layout>
  )
}

export default IndexPage

type Data = {
  allMarkdownRemark: {
    edges: Array<{
      node: {
        fields: {
          slug: string
        }
        frontmatter: {
          title: string
          date: string
          description: string
          category: string
          background: string
        }
        timeToRead: number
      }
    }>
  }
}
