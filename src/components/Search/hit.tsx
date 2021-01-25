import React from 'react'

import { PostItem, PostItemProps } from 'components/PostItem'

export type HitProps = {
  hit: {
    fields: {
      slug: string
    }
  } & Omit<PostItemProps, 'timeToRead' | 'slug'>
}

export const Hit = ({
  hit: {
    title,
    description,
    category,
    date,
    background,
    fields: { slug }
  }
}: HitProps) => (
  <PostItem
    title={title}
    description={description}
    category={category}
    date={date}
    slug={slug}
    background={background}
  />
)
