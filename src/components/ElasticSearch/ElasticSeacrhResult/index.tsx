import React from 'react'
import { SearchResultContainer } from './styled'

interface ElasticSearchResultProps {
  result: string
  onSelectResult: (
    result: string,
    event?: React.MouseEvent<HTMLDivElement>
  ) => void
}

const ElasticSearchResult: React.FC<ElasticSearchResultProps> = ({
  result,
  onSelectResult,
}) => {
  return (
    <SearchResultContainer
      onClick={() => onSelectResult(result)}
      data-testid={`result-${result}`}
    >
      {result}
    </SearchResultContainer>
  )
}

export default ElasticSearchResult
