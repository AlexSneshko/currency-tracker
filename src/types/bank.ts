import { CurrencyCode } from './currency'

export interface Bank {
  id: number
  name: string
  address: string
  currencies: Array<CurrencyCode>
  lat: number
  lng: number
}
