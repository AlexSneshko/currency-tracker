import audIcon from '@/assets/australian-dollar-icon.svg'
import btcIcon from '@/assets/bitcoin-icon.svg'
import cadIcon from '@/assets/canadian-dollar-icon.svg'
import usdtIcon from '@/assets/dollar-icon.svg'
import eurIcon from '@/assets/euro-icon.svg'
import gbrIcon from '@/assets/libra-icon.svg'
import arsIcon from '@/assets/peso-argentino-icon.svg'
import yenIcon from '@/assets/yen-icon.svg'
import cnyIcon from '@/assets/yuan-icon.svg'
import { CurrencyRecords } from '@/types/currency'

export const currencies: CurrencyRecords = {
  AUD: {
    name: 'Australian Dollar',
    icon: audIcon,
  },
  ARS: {
    name: 'Argentine Peso',
    icon: arsIcon,
  },
  BTC: {
    name: 'Bitcoin',
    icon: btcIcon,
  },
  CAD: {
    name: 'Canadian Dollar',
    icon: cadIcon,
  },
  CNY: {
    name: 'Yuan',
    icon: cnyIcon,
  },
  EUR: {
    name: 'Euro',
    icon: eurIcon,
  },
  USD: {
    name: 'Commertial Dollar',
    icon: usdtIcon,
  },
  JPY: {
    name: 'Yen',
    icon: yenIcon,
  },
  GBR: {
    name: 'Libra',
    icon: gbrIcon,
  },
}
