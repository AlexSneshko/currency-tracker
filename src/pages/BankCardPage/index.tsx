import React, { Component, ReactNode } from 'react'

import { BankMap } from '@/components/BanksMap'

import { BanckCardPageLayout } from './styled'

class BankCardPage extends Component {
  render = () => {
    return (
      <BanckCardPageLayout>
        <h1>Search currency in the bank</h1>
        <BankMap />
      </BanckCardPageLayout>
    )
  }
}

export default BankCardPage
