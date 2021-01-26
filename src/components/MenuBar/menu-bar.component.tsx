import React, { useState, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Arrow, Grid, Home, Light, List, Search } from './icons'

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
        <AniLink
          to="/"
          title="Go back to Home"
          cover
          direction="left"
          bg="#16202c"
          duration={0.6}
        >
          <S.Item>
            <Home />
          </S.Item>
        </AniLink>
        <AniLink
          to="/search/"
          title="Search"
          cover
          direction="left"
          bg="#16202c"
          duration={0.6}
        >
          <S.Item>
            <Search />
          </S.Item>
        </AniLink>
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
          className="display"
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
