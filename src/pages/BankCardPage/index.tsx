import { Component, ReactNode } from 'react'

import BanksMap from '@/components/BanksMap'

import { BanckCardPageLayout } from './styled'

class BankCardPage extends Component {
  render(): ReactNode {
    return (
      <BanckCardPageLayout>
        <h1>Search currency in the bank</h1>
        <BanksMap />
      </BanckCardPageLayout>
    )
  }
}

export default BankCardPage
