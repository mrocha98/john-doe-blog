import React, { ReactNode, HTMLProps, AnchorHTMLAttributes } from 'react'
import AnimatedLink from 'gatsby-plugin-transition-link/AniLink'

export type AniLinkProps = {
  children: ReactNode
  to: string
  direction?: 'left' | 'right'
  duration?: number
  bg?: string
  activeClassName?: string
} & HTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>>

export const AniLink = ({
  children,
  to,
  direction = 'left',
  duration = 0.6,
  bg = 'var(--background)',
  className = '',
  activeClassName = 'active'
}: AniLinkProps) => (
  <AnimatedLink
    cover
    to={to}
    direction={direction}
    duration={duration}
    bg={bg}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </AnimatedLink>
)
