import React from 'react'

import * as S from './post-item.styles'

export type PostItemProps = {
  slug: string
  category: string
  title: string
  description: string
  date: string
  timeToRead: string
  background?: string
}

const DEFAULT_BACKGROUND = '#47650b'

export const PostItem = ({
  slug,
  category,
  title,
  description,
  date,
  timeToRead,
  background = DEFAULT_BACKGROUND
}: PostItemProps) => {
  return (
    <S.Link to={slug}>
      <S.Wrapper>
        <S.Tag background={background}>{category}</S.Tag>
        <S.Info>
          <S.Date>
            {date} + {timeToRead} minutes of reading
          </S.Date>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.Info>
      </S.Wrapper>
    </S.Link>
  )
}
