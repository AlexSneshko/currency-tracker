import ElasticSearchResult from '../ElasticSeacrhResult'
import { ElasticSearchContainer } from './styled'

interface ElasticResultsList {
  results: Array<string>
  onSelectResult: (
    result: string,
    event?: React.MouseEvent<HTMLDivElement>
  ) => void
}

const ElasticResultsList = ({
  results,
  onSelectResult,
}: ElasticResultsList) => {
  return (
    <ElasticSearchContainer>
      {results.map((result: any, id: any) => {
        return (
          <ElasticSearchResult
            result={result.name}
            onSelectResult={onSelectResult}
            key={id}
          />
        )
      })}
    </ElasticSearchContainer>
  )
}

export default ElasticResultsList
