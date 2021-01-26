import React from 'react'

import * as S from './recommend-posts.styles'
import { AniLink } from 'components/AniLink'

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
      <AniLink to={previous.fields.slug} className="previous" direction="left">
        {previous.frontmatter.title}
      </AniLink>
    )}
    {!!next && (
      <AniLink to={next.fields.slug} className="next" direction="right">
        {next.frontmatter.title}
      </AniLink>
    )}
  </S.Wrapper>
)
