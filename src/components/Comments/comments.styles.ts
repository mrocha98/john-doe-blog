import styled from 'styled-components'

// import { CommentsProps } from '.'

export const Wrapper = styled.div`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;
  iframe[src*='ads-iframe'] {
    display: none;
  }
  #disqus_thread {
    a {
      color: var(--highlight) !important;
    }
  }
`

export const Title = styled.h2`
  color: var(--texts);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`
