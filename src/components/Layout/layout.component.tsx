import React, { ReactNode } from 'react'

import * as S from './layout.styles'
import { GlobalStyles } from 'styles/global'
import { Sidebar } from 'components/Sidebar'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <Sidebar />
        <S.Main>{children}</S.Main>
      </S.Wrapper>
    </>
  )
}
