import bvspIcon from '@/assets/bovespa-icon.svg'
import ifixIcon from '@/assets/IFIX-icon.svg'
import { StocksRecords } from '@/types/stocks'

export const stocks: StocksRecords = {
  BVSP: {
    icon: bvspIcon,
    name: 'Bovespa Index',
    value: 0.15,
  },
  IFIX: {
    icon: ifixIcon,
    name: 'IFIX',
    value: 0.15,
  },
}
