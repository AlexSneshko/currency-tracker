import { useEffect, useState } from 'react'
import { ElasicClearButton, ElasticInput, ElasticInputWrapper } from './styled'
import { banks } from '@/constants/banks'
import { Bank } from '@/types/bank'
import searchIcon from '@/assets/search-icon.svg'

interface ElasticBarProps {
  initValue: string
  setResults: any
  onClear: (event?: React.MouseEvent<HTMLButtonElement>) => void
}

const getUniqueBanks = (): Array<Bank> => {
  const uniqueBanks: Array<Bank> = []
  const uniqueBanksNames: Array<string> = []

  banks.forEach((bank) => {
    if (!uniqueBanksNames.includes(bank.name)) {
      uniqueBanks.push(bank)
      uniqueBanksNames.push(bank.name)
    }
  })

  return uniqueBanks
}

const ElasticBar = ({ setResults, initValue, onClear }: ElasticBarProps) => {
  const [input, setInput] = useState<string>(initValue)

  useEffect(() => {
    setInput(initValue)
  }, [initValue])

  const fetchData = (value: any) => {
    const res = getUniqueBanks().filter((bankName) =>
      bankName.name.toLowerCase().includes(value.toLowerCase())
    )

    setResults(res)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (value) {
      setInput(value)
      fetchData(value)
    } else {
      setInput('')
      setResults([])
    }
  }

  const onClearBar = (event: React.MouseEvent<HTMLButtonElement>) => {
    setInput('')
    setResults([])
    onClear()
  }

  return (
    <ElasticInputWrapper>
      <img src={searchIcon} />
      <ElasticInput
        placeholder="Type to search..."
        value={input}
        onChange={handleChange}
      />
      <ElasicClearButton onClick={onClearBar}>x</ElasicClearButton>
    </ElasticInputWrapper>
  )
}

export default ElasticBar
