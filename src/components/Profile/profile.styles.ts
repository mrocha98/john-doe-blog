import styled from 'styled-components'
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
`

export const Author = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;
`

export const Position = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`
