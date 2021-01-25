import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './comments.styles'

export type CommentsProps = {
  url: string
  title: string
}

export const Comments = ({ url, title }: CommentsProps) => {
  const completeURL = `https://john-doe-blog.netlify.app${url}`

  return (
    <S.Wrapper>
      <S.Title>Comments</S.Title>
      <ReactDisqusComments
        shortname="https-john-doe-blog-netlify-app"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.Wrapper>
  )
}
