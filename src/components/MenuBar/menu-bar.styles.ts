import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

// import { MenuBarProps } from '.'

export const Wrapper = styled.div`
  align-items: center;
  background: #192734;
  border-left: 1px solid #38444d;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Link = styled(GatsbyLink)`
  display: block;
`

export const Item = styled.span`
  color: #8899a6;
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;
  &:hover {
    color: #1fa1f2;
  }
`
