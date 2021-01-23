import React from 'react'

import * as S from './menu-links.styles'
import { links } from './content'

export type MenuLinksProps = {}

export const MenuLinks = ({}: MenuLinksProps) => {
  return (
    <S.Wrapper>
      <S.List>
        {links.map(({ label, url }, index) => (
          <S.Item key={index}>
            <S.Link to={url} activeClassName="active">
              {label}
            </S.Link>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}
