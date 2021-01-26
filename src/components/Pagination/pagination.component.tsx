import React from 'react'
import { LeftArrowCircle, RightArrowCircle } from './icons'

import * as S from './pagination.styles'
import { AniLink } from 'components/AniLink'

export type PaginationProps = {
  isFirstPage: boolean
  isLastPage: boolean
  currentPage: number
  totalPages: number
  previousPage?: string
  nextPage?: string
}

export const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  totalPages,
  nextPage = '#',
  previousPage = '#'
}: PaginationProps) => {
  return (
    <S.Wrapper>
      {!isFirstPage && (
        <AniLink to={previousPage} direction="left">
          <S.IconWrapper hasLeftIcon={true} hasRightIcon={false}>
            <LeftArrowCircle aria-hidden="true" />
            <p>previous page</p>
          </S.IconWrapper>
        </AniLink>
      )}
      <p>
        {currentPage} of {totalPages}
      </p>
      {!isLastPage && (
        <AniLink to={nextPage} direction="right">
          <S.IconWrapper hasLeftIcon={false} hasRightIcon={true}>
            <p>next page</p>
            <RightArrowCircle aria-hidden="true" />
          </S.IconWrapper>
        </AniLink>
      )}
    </S.Wrapper>
  )
}
