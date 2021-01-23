import styled from 'styled-components'

// import { SocialLinksProps } from '.'

export const Wrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const List = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const Item = styled.li``

export const Link = styled.a`
  color: #8899a6;
  text-decoration: none;
  transition: color 500ms;

  &:hover {
    color: #1fa1f2;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
