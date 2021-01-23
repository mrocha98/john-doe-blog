import React from 'react'

import * as S from './social-links.styles'
import { Icons } from './icons'
import { links } from './content'

export type SocialLinksProps = {}

export const SocialLinks = ({}: SocialLinksProps) => {
  return (
    <S.Wrapper>
      <S.List>
        {links.map(({ url, label }, index) => {
          const Icon = Icons[label]

          return (
            <S.Item key={index}>
              <S.Link
                href={url}
                title={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.Link>
            </S.Item>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}
