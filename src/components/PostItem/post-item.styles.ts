import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { PostItemProps } from '.'

export const Wrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid var(--borders);
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const Link = styled(GatsbyLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }

  body#grid & {
    background-color: var(--background);
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

    body#grid & {
      margin-bottom: 1.5rem;
    }
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

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
