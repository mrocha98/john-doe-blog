import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from './profile.styles'
import { Avatar } from 'components/Avatar'

export type ProfileProps = {}

export const Profile = ({}: ProfileProps) => {
  const {
    site: {
      siteMetadata: { title, description, position }
    }
  } = useStaticQuery<Data>(graphql`
    query MySiteData {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.Wraper>
      <AniLink to="/about" cover direction="right" bg="#16202c" duration={0.6}>
        <Avatar />
        <S.Author>
          {title}
          <S.Position>{position}</S.Position>
        </S.Author>
      </AniLink>
      <S.Description>{description}</S.Description>
    </S.Wraper>
  )
}

type Data = {
  site: {
    siteMetadata: {
      title: string
      position: string
      description: string
    }
  }
}
