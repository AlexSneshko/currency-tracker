import React from 'react'

import { SearchResultContainer } from './styled'

interface ElasticSearchResultProps {
  result: string
  onSelectResult: (
    result: string,
    event?: React.MouseEvent<HTMLDivElement>
  ) => void
}

export const ElasticSearchResult: React.FC<ElasticSearchResultProps> = ({
  result,
  onSelectResult,
}) => {
  const onSearchResultClick = () => onSelectResult(result)

  return (
    <SearchResultContainer
      onClick={onSearchResultClick}
      data-testid={`result-${result}`}
    >
      {result}
    </SearchResultContainer>
  )
}
