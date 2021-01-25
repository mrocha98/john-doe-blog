import React from 'react'
import { graphql } from 'gatsby'

import * as S from './blog-list.styles'
import { Layout } from 'components/Layout'
import { SEO } from 'components/SEO'
import { PostItem } from 'components/PostItem'
import { Pagination } from 'components/Pagination'

type BlogListProps = {
  data: {
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
          timeToRead: string | number
        }
      }>
    }
  }
  pageContext: {
    currentPage: number
    totalPages: number
  }
}

export default function BlogList({ data, pageContext }: BlogListProps) {
  const { edges: posts } = data.allMarkdownRemark

  const { currentPage, totalPages } = pageContext

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const previousPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <S.ListWrapper>
        {posts.map(
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
      </S.ListWrapper>
      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
        totalPages={totalPages}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query GET_POST_LIST($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
`
