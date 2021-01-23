import React from 'react'

import * as S from './sidebar.styles'
import { Profile } from 'components/Profile'
import { SocialLinks } from 'components/SocialLinks'
import { MenuLinks } from 'components/MenuLinks'

export type SidebarProps = {}

export const Sidebar = ({}: SidebarProps) => {
  return (
    <S.Wrapper>
      <Profile />
      <SocialLinks />
      <MenuLinks />
    </S.Wrapper>
  )
}
