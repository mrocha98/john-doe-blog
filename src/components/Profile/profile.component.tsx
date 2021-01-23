import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './profile.styles'

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
      <h1>{title}</h1>
      <h2>{position}</h2>
      <p>{description}</p>
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
