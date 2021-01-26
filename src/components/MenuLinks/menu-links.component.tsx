import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './menu-links.styles'
import { links } from './content'

export type MenuLinksProps = {}

export const MenuLinks = ({}: MenuLinksProps) => {
  return (
    <S.Wrapper>
      <S.List>
        {links.map(({ label, url }, index) => (
          <S.Item key={index}>
            <AniLink
              cover
              direction="left"
              bg="#16202c"
              duration={0.6}
              to={url}
              activeClassName="active"
            >
              {label}
            </AniLink>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}
