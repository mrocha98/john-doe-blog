import styled from 'styled-components'
import media from 'styled-media-query'
import Img, { GatsbyImageFluidProps } from 'gatsby-image'

type ImgProps = {
  fluid: GatsbyImageFluidProps
}

export const Wrapper = styled(Img)<ImgProps>`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;

  ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
  `}
`
