import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { LeftArrowCircle } from '@styled-icons/boxicons-regular/LeftArrowCircle'
import { RightArrowCircle } from '@styled-icons/boxicons-regular/RightArrowCircle'

import * as S from './pagination.styles'

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
        <AniLink
          to={previousPage}
          cover
          direction="left"
          bg="#16202c"
          duration={0.6}
        >
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
        <AniLink
          to={nextPage}
          cover
          direction="right"
          bg="#16202c"
          duration={0.6}
        >
          <S.IconWrapper hasLeftIcon={false} hasRightIcon={true}>
            <p>next page</p>
            <RightArrowCircle aria-hidden="true" />
          </S.IconWrapper>
        </AniLink>
      )}
    </S.Wrapper>
  )
}
