import React from 'react'
import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'

import * as S from './menu-bar.styles'

export type MenuBarProps = {}

export const MenuBar = ({}: MenuBarProps) => {
  return (
    <S.Wrapper>
      <S.Group>
        <S.Link to="/" title="Go back to Home">
          <S.Item>
            <Home />
          </S.Item>
        </S.Link>
        <S.Link to="/search/" title="Search">
          <S.Item>
            <Search />
          </S.Item>
        </S.Link>
      </S.Group>
      <S.Group>
        <S.Item title="Change theme">
          <Light />
        </S.Item>
        <S.Item title="Change view mode">
          <Arrow />
        </S.Item>
        <S.Item title="Go to top">
          <Grid />
        </S.Item>
      </S.Group>
    </S.Wrapper>
  )
}
