import styled from 'styled-components'
import media from 'styled-media-query'
import { Link as GatsbyLink } from 'gatsby'

// import { MenuBarProps } from '.'

export const Wrapper = styled.div`
  align-items: center;
  background: var(--mediumBackground);
  border-left: 1px solid var(--borders);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  ${media.lessThan('large')`
    border-top: 1px solid var(--borders);
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`

export const Link = styled(GatsbyLink)`
  display: block;

  &.active {
    span {
      color: var(--highlight);
    }
  }
`

export const Item = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &:hover {
    color: var(--highlight);
  }

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
    }
  }

  &.display {
    ${media.lessThan('medium')`
      display: none;
    `}
  }

  ${media.greaterThan('large')`
    &:hover {
      color: var(--highlight);
    }
  `}

  ${media.lessThan('large')`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`
