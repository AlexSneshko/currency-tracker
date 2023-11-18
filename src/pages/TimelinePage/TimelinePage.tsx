import { dataCurrencies } from '@/utils/api/data'
import { BarChart } from '@/components/CurrencyChart'
import { useEffect, useState } from 'react'
import { fetchChartData } from '@/utils/api/fetchChartData'
import { ICurrencyChartResponse } from '@/types/api'

const TimelinePage = () => {
  const [data, setData] = useState<ICurrencyChartResponse[]>([])

  useEffect(() => {
    fetchChartData().then((data: ICurrencyChartResponse[]) => {
      console.log(data)
      setData(data.reverse())
    })
  }, [])

  return (
    <div>
      <BarChart dataChart={data} code={'BTC'} />
    </div>
  )
}

export default TimelinePage
