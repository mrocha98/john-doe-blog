import React from 'react'
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
        <S.Link to={previousPage}>
          <S.IconWrapper hasLeftIcon={true} hasRightIcon={false}>
            <LeftArrowCircle aria-hidden="true" />
            <p>previous page</p>
          </S.IconWrapper>
        </S.Link>
      )}
      <p>
        {currentPage} of {totalPages}
      </p>
      {!isLastPage && (
        <S.Link to={nextPage}>
          <S.IconWrapper hasLeftIcon={false} hasRightIcon={true}>
            <p>next page</p>
            <RightArrowCircle aria-hidden="true" />
          </S.IconWrapper>
        </S.Link>
      )}
    </S.Wrapper>
  )
}
