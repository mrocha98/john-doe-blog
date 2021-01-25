import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, Stats } from 'react-instantsearch-dom'

import * as S from './search.styles'
import { Hit } from './hit'

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID!,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY!,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME!
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

export type SearchProps = {}

export const Search = ({}: SearchProps) => {
  return (
    <S.Wrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox
          autoFocus
          translations={{ placeholder: 'Search posts...' }}
        />
        <Stats
          translations={{
            stats(nbHits, timeSpentMs) {
              return `${nbHits} results found in ${timeSpentMs}`
            }
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.Wrapper>
  )
}
