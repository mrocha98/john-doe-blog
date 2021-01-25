import styled from 'styled-components'
import media from 'styled-media-query'
import { Link as GatsbyLink } from 'gatsby'

// import { MenuLinksProps } from '.'

export const Wrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`

export const List = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const Item = styled.li`
  padding: 0.5rem 0;

  .active {
    color: var(--highlight);
  }
`

export const Link = styled(GatsbyLink)`
  color: var(--texts);
  text-decoration: none;

  &:hover {
    color: var(--highlight);
  }
`
