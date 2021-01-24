import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Link as GatsbyLink } from 'gatsby'

// import { PaginationProps } from '.'

export const Wrapper = styled.section`
  align-items: center;
  border-top: 1px solid #38444d;
  color: #8899a6;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
`

export const Link = styled(GatsbyLink)`
  color: #8899a6;
  text-decoration: none;
  font-weight: bold;
  transition: color 500ms;

  &:hover {
    color: #1fa1f2;
    text-decoration: underline;
  }
`

type IconWrapperProps = {
  hasLeftIcon: boolean
  hasRightIcon: boolean
}

const iconWrapperModifiers = {
  hasLeftIcon: () => css`
    p {
      margin-left: 0.5rem;
      margin-right: 0;
    }
  `,

  hasRightIcon: () => css`
    p {
      margin-left: 0;
      margin-right: 0.5rem;
    }
  `
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ hasLeftIcon, hasRightIcon }) => css`
    display: flex;
    align-items: center;

    svg {
      width: 32px;
      height: 32px;
    }

    p {
      display: none;
    }

    ${media.greaterThan('large')`
      p {
        display: block;
      }
    `}

    ${hasLeftIcon && iconWrapperModifiers.hasLeftIcon}
    ${hasRightIcon && iconWrapperModifiers.hasRightIcon}
  `}
`
