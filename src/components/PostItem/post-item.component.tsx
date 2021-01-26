import React from 'react'
// import { getThemeColor } from 'utils/getThemeColor'

import * as S from './post-item.styles'
import { AniLink } from 'components/AniLink'

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
    <AniLink to={slug} direction="left">
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
