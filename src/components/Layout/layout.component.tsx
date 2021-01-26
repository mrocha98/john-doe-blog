import React, { ReactNode } from 'react'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

import * as S from './layout.styles'
import { GlobalStyles } from 'styles/global'
import { Sidebar } from 'components/Sidebar'
import { MenuBar } from 'components/MenuBar'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <TransitionPortal level="top">
          <Sidebar />
        </TransitionPortal>
        <S.Main>{children}</S.Main>
        <TransitionPortal level="top">
          <MenuBar />
        </TransitionPortal>
      </S.Wrapper>
    </>
  )
}
