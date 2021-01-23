import styled from 'styled-components'
import Img, { GatsbyImageFixedProps } from 'gatsby-image'

type ImgProps = {
  fixed: GatsbyImageFixedProps
}

export const Wrapper = styled(Img)<ImgProps>`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;
`
