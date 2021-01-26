import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
      <AniLink
        to={previous.fields.slug}
        className="previous"
        cover
        direction="left"
        bg="#16202c"
        duration={0.6}
      >
        {previous.frontmatter.title}
      </AniLink>
    )}
    {!!next && (
      <AniLink
        to={next.fields.slug}
        className="next"
        cover
        direction="right"
        bg="#16202c"
        duration={0.6}
      >
        {next.frontmatter.title}
      </AniLink>
    )}
  </S.Wrapper>
)
