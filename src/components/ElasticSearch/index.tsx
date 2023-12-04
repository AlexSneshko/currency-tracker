import React, { useState } from 'react'

import { Bank } from '@/types/bank'

import { ElasticBar } from './ElasticBar'
import { ElasticResultsList } from './ElasticResultsList'
import { StyledElasticSearchContainer } from './styled'

export interface ElasticSearchProps {
  onSearchResult: (result: string) => void
}

export const ElasticSearch: React.FC<ElasticSearchProps> = ({
  onSearchResult,
}) => {
  const [results, setResults] = useState<Array<Bank>>([])
  const [selectedResult, setSelectedResult] = useState<string>('')

  const onSelectResult = (result: string) => () => {
    setResults([])

    setSelectedResult(result)

    onSearchResult(result)
  }

  const onClear = () => onSelectResult('')

  return (
    <StyledElasticSearchContainer>
      <ElasticBar
        setResults={setResults}
        initValue={selectedResult}
        onClear={onClear}
      />
      {results && results.length > 0 && (
        <ElasticResultsList results={results} onSelectResult={onSelectResult} />
      )}
    </StyledElasticSearchContainer>
  )
}
