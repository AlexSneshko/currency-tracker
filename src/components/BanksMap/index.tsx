import 'leaflet/dist/leaflet.css'

import { Icon } from 'leaflet'
import React, { Component } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { banks } from '@/constants/banks'

import ElasticSearch from '../ElasticSearch'

const customIcon = new Icon({
  iconUrl: require('@/assets/map-pin-icon.svg'),
  iconSize: [38, 38],
})

interface BankMapState {
  selectedCurrency: string | null
  selectedBank: string | null
}

class BankMap extends Component<Readonly<BankMapState>> {
  state = {
    selectedCurrency: null,
    selectedBank: '',
  }

  handleCurrencyChange = (currency: string) => {
    this.setState({ selectedCurrency: currency })
  }

  onSelectedBank = (bank: string) => {
    this.setState({ selectedBank: bank })
  }

  render() {
    const { selectedCurrency, selectedBank } = this.state

    let filteredBanks = selectedBank
      ? banks.filter((bank) => bank.name === selectedBank)
      : banks

    filteredBanks = selectedCurrency
      ? filteredBanks.filter((bank) =>
          bank.currencies.includes(selectedCurrency)
        )
      : filteredBanks

    return (
      <div>
        <ElasticSearch onSearchResult={this.onSelectedBank} />
        <select onChange={(e) => this.handleCurrencyChange(e.target.value)}>
          <option value="">Any Currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        <MapContainer
          center={[53.9, 27.55]}
          zoom={12}
          style={{ height: '40rem', width: '100%' }}
        >
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
        </MapContainer>
      </div>
    )
  }
}

export default BankMap
