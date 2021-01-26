import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './post-item.styles'

export type PostItemProps = {
  slug: string
  category: string
  title: string
  description: string
  date: string
  timeToRead?: string | number
  background?: string
}

export const PostItem = ({
  slug,
  category,
  title,
  description,
  date,
  timeToRead,
  background
}: PostItemProps) => (
  <S.Wrapper>
    <AniLink to={slug} cover direction="left" bg="#16202c">
      <S.Container>
        <S.Tag background={background}>{category}</S.Tag>
        <S.Info>
          <S.Date>
            {date} {!!timeToRead && <>&#43; {timeToRead} minutes of reading</>}
          </S.Date>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
      </S.Container>
    </AniLink>
  </S.Wrapper>
)
