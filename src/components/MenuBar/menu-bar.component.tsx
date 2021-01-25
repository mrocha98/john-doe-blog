import React, { useState, useEffect } from 'react'
import { Home } from '@styled-icons/boxicons-solid/Home'
import { SearchAlt2 as Search } from '@styled-icons/boxicons-regular/SearchAlt2'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { Bulb as Light } from '@styled-icons/boxicons-regular/Bulb'
import { Grid } from '@styled-icons/boxicons-solid/Grid'
import { ThList as List } from '@styled-icons/typicons/ThList'

import * as S from './menu-bar.styles'

export type MenuBarProps = {}

export const MenuBar = ({}: MenuBarProps) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [display, setDisplay] = useState<string | null>(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

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
        <S.Item
          className={theme || ''}
          title="Change theme"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
        >
          <Light />
        </S.Item>
        <S.Item
          title="Change view mode"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.Item>
        <S.Item title="Go to top">
          <Arrow />
        </S.Item>
      </S.Group>
    </S.Wrapper>
  )
}
