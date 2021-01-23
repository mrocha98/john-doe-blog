import React from 'react'

import * as S from './profile.styles'

export type ProfileProps = {}

export const Profile = ({}: ProfileProps) => {
  return (
    <S.Wraper>
      <h1>John Doe</h1>
      <h2>Professional Imaginary Person</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit in
        recusandae ipsam quis amet doloribus, culpa quaerat dolores, provident
        ipsa atque, illo unde repudiandae. Nostrum nisi nihil perspiciatis
        beatae corrupti?
      </p>
    </S.Wraper>
  )
}
