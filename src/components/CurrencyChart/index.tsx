import { FC, memo } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart,
  Chart as ChartJS,
  ChartMeta,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'

import { Container } from './styled'

import { CurrencyChartResponse } from '@/types/api'

interface CurrencyChartProps {
  dataChart: CurrencyChartResponse[]
  code: string
}

interface Data {
  datasets: [
    {
      label: string
      data: DataElem[]
      backgroundColor: (ctx: any) => string
      borderColor: string
      borderWidth: number
      borderSkipped: boolean
    },
  ]
}

interface DataElem {
  x: string | null
  o: number
  h: number
  l: number
  c: number
  s: number[]
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarChart: FC<CurrencyChartProps> = memo(({ dataChart, code }) => {
  if (dataChart.length === 0) return null

  const data: Data = {
    datasets: [
      {
        label: `${code} / USD`,
        data:
          dataChart &&
          dataChart.map((currencyValue) => {
            return {
              x: currencyValue.time_close.slice(0, 10),
              o: currencyValue.price_open,
              h: currencyValue.price_high,
              l: currencyValue.price_low,
              c: currencyValue.price_close,
              s: [currencyValue.price_open, currencyValue.price_close],
            }
          }),
        backgroundColor: (ctx: any) => {
          const {
            raw: { o, c },
          } = ctx

          let color

          if (c >= o) {
            color = 'rgb(75, 192, 192)'
          } else {
            color = 'rgb(255, 26, 104)'
          }

          return color
        },
        borderColor: '#000',
        borderWidth: 1,
        borderSkipped: false,
      },
    ],
  }

  const options = {
    responsive: true,
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    scales: {
      x: {},
      y: {
        beginAtZero: false,
        grace: '20%',
      },
    },
  }

  const candlestick = {
    id: 'candlestick',
    beforeDatasetDraw(
      chart: Chart,
      args: { index: number; meta: ChartMeta }
    ): boolean | void {
      const {
        ctx,
        data: IDataElem,
        chartArea: { top, bottom, left, right, width },
        scales: { x, y },
      } = chart

      ctx.save()
      ctx.lineWidth = 1
      ctx.strokeStyle = '#000'

      data.datasets[0].data.forEach((datapoint: any, index: number) => {
        ctx.beginPath()
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        )
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data?.datasets[0]?.data[index]?.h)
        )
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        )
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data?.datasets[0]?.data[index]?.l)
        )
        ctx.stroke()
      })
    },
  }

  return (
    <Container>
      <Bar
        data={data}
        options={options}
        plugins={[candlestick]}
        style={{ margin: 0 }}
      />
    </Container>
  )
})
