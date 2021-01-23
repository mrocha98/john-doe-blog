import React from 'react'

import * as S from './sidebar.styles'
import { Profile } from 'components/Profile'
import { SocialLinks } from 'components/SocialLinks'

export type SidebarProps = {}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <S.Wrapper>
      <Profile />
      <SocialLinks />
    </S.Wrapper>
  )
}
