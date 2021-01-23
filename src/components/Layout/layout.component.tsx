import React, { ReactNode } from 'react'

import * as S from './layout.styles'
import { Profile } from 'components/Profile'
import { GlobalStyles } from 'styles/global'

export type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.Aside>
          <Profile />
        </S.Aside>
        <S.Main>{children}</S.Main>
      </S.Wrapper>
    </>
  )
}
