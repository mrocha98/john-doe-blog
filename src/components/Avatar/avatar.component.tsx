import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImageFluidProps } from 'gatsby-image'

import * as S from './avatar.styles'

export type AvatarProps = {}

export const Avatar = ({}: AvatarProps) => {
  const {
    avatarImage: {
      childImageSharp: { fluid }
    }
  } = useStaticQuery<Data>(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <S.Wrapper fluid={fluid} />
}

type Data = {
  avatarImage: {
    childImageSharp: {
      fluid: GatsbyImageFluidProps
    }
  }
}
