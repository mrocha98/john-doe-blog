import styled from 'styled-components'
import media from 'styled-media-query'
import { Link as GatsbyLink } from 'gatsby'

export const Wraper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;
`

export const Link = styled(GatsbyLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 500ms;

  &:hover {
    color: var(--highlight);
  }

  ${media.lessThan('large')`
    display: flex;
    text-align: left;
  `}
`

export const Author = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan('large')`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const Position = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan('large')`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan('large')`
    display: none;
  `}
`
