import React from 'react'

import * as S from './menu-links.styles'
import { AniLink } from 'components/AniLink'
import { links } from './content'

export type MenuLinksProps = {}

export const MenuLinks = ({}: MenuLinksProps) => {
  return (
    <S.Wrapper>
      <S.List>
        {links.map(({ label, url }, index) => (
          <S.Item key={index}>
            <AniLink to={url} direction="left">
              {label}
            </AniLink>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}
