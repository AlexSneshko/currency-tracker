import React from 'react'

import { Bank } from '@/types/bank'

import { ElasticSearchResult } from '../ElasticSeacrhResult'
import { ElasticSearchContainer } from './styled'

interface ElasticResultsList {
  results: Array<Bank>
  onSelectResult: (result: string) => () => void
}

export const ElasticResultsList: React.FC<ElasticResultsList> = ({
  results,
  onSelectResult,
}: ElasticResultsList) => {
  return (
    <ElasticSearchContainer>
      {results.map((result: Bank) => {
        return (
          <ElasticSearchResult
            result={result.name}
            onSelectResult={onSelectResult(result.name)}
            key={result.address}
            data-testid={`result-${result.address}`}
          />
        )
      })}
    </ElasticSearchContainer>
  )
}
