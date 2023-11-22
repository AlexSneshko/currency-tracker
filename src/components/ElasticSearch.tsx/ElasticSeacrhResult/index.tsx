import { SearchResultContainer } from './styled'

interface ElasticSearchResultProps {
  result: string
  onSelectResult: (
    result: string,
    event?: React.MouseEvent<HTMLDivElement>
  ) => void
}

const ElasticSearchResult = ({
  result,
  onSelectResult,
}: ElasticSearchResultProps) => {
  return (
    <SearchResultContainer onClick={() => onSelectResult(result)}>
      {result}
    </SearchResultContainer>
  )
}

export default ElasticSearchResult
