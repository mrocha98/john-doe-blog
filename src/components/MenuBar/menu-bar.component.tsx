import React, { useState, useEffect } from 'react'
import { Arrow, Grid, Home, Light, List, Search } from './icons'

import * as S from './menu-bar.styles'
import { AniLink } from 'components/AniLink'

export type MenuBarProps = {}

export const MenuBar = ({}: MenuBarProps) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [display, setDisplay] = useState<string | null>(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'

  const onThemeChangeIconClick = () => {
    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
  }

  const onViewModeChangeIconClick = () => {
    window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
  }

  const onGoToTopIconClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  return (
    <S.Wrapper>
      <S.Group>
        <AniLink to="/" title="Go back to Home" direction="left">
          <S.Item>
            <Home />
          </S.Item>
        </AniLink>
        <AniLink to="/search/" title="Search" direction="left">
          <S.Item>
            <Search />
          </S.Item>
        </AniLink>
      </S.Group>
      <S.Group>
        <S.Item
          className={theme || ''}
          title="Change theme"
          onClick={onThemeChangeIconClick}
        >
          <Light />
        </S.Item>
        <S.Item
          title="Change view mode"
          className="display"
          onClick={onViewModeChangeIconClick}
        >
          {isListMode ? <Grid /> : <List />}
        </S.Item>
        <S.Item title="Go to top" onClick={onGoToTopIconClick}>
          <Arrow />
        </S.Item>
      </S.Group>
    </S.Wrapper>
  )
}
