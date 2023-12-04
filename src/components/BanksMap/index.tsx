import 'leaflet/dist/leaflet.css'

import React, { ChangeEvent, Component } from 'react'
import { Icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { banks } from '@/constants/banks'

import { ElasticSearch } from '../ElasticSearch'
import { StyledMapContainer } from './styled'

const customIcon = new Icon({
  iconUrl: require('@/assets/map-pin-icon.svg'),
  iconSize: [38, 38],
})

interface BankMapState {
  selectedCurrency: string | null
  selectedBank: string | null
}

export class BankMap extends Component<{}, BankMapState> {
  state = {
    selectedCurrency: null,
    selectedBank: '',
  }

  handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCurrency: event.target.value })
  }

  onSelectedBank = (bank: string) => {
    this.setState({ selectedBank: bank })
  }

  render = () => {
    const { selectedCurrency, selectedBank } = this.state

    let filteredBanks = banks

    if (selectedBank) {
      filteredBanks = banks.filter((bank) => bank.name === selectedBank)
    }

    if (selectedCurrency) {
      filteredBanks = filteredBanks.filter((bank) =>
        bank.currencies.includes(selectedCurrency)
      )
    }

    return (
      <div>
        <ElasticSearch onSearchResult={this.onSelectedBank} />
        <select onChange={this.handleCurrencyChange}>
          <option value="">Any Currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <StyledMapContainer center={[53.9, 27.55]} zoom={12}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {filteredBanks.map((bank) => (
            <Marker
              key={bank.id}
              position={[bank.lat, bank.lng]}
              icon={customIcon}
            >
              <Popup>
                {bank.name}
                <br />
                {bank.address}
              </Popup>
            </Marker>
          ))}
        </StyledMapContainer>
      </div>
    )
  }
}
