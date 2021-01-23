import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImageFixedProps } from 'gatsby-image'

import * as S from './avatar.styles'

export type AvatarProps = {}

export const Avatar = ({}: AvatarProps) => {
  const { avatarImage } = useStaticQuery<Data>(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <S.Wrapper fixed={avatarImage.childImageSharp.fixed} />
}

type Data = {
  avatarImage: {
    childImageSharp: {
      fixed: GatsbyImageFixedProps
    }
  }
}
