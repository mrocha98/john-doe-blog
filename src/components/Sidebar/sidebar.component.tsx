import React from 'react'

import * as S from './sidebar.styles'
import { Profile } from 'components/Profile'

export type SidebarProps = {}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <S.Wrapper>
      <Profile />
    </S.Wrapper>
  )
}
