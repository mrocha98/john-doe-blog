import React from 'react'

import * as S from './recommend-posts.styles'

type PostData = {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}

export type RecommendPostsProps = {
  next?: PostData
  previous?: PostData
}

export const RecommendPosts = ({ next, previous }: RecommendPostsProps) => (
  <S.Wrapper>
    {!!previous && (
      <S.RecommendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {!!next && (
      <S.RecommendedLink to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.Wrapper>
)
