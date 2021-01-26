import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { PostItemProps } from '.'

export const Wrapper = styled.div`
  a {
    color: var(--texts);
    display: flex;
    text-decoration: none;

    &:hover {
      color: var(--highlight);
    }

    body#grid & {
      background-color: var(--background);
      height: 100%;
    }
  }
`

export const Container = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

type TagProps = Pick<PostItemProps, 'background'>

export const Tag = styled.div<TagProps>`
  ${({ background }) => css`
    align-items: center;
    background: ${background || 'var(--highlight)'};
    border-radius: 50%;
    color: var(--background);
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    justify-content: center;
    min-height: 90px;
    min-width: 90px;
    text-transform: uppercase;

    ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

    body#grid & {
      margin-bottom: 1.5rem;
    }
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const Date = styled.time`
  font-size: 0.9rem;
`

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`
