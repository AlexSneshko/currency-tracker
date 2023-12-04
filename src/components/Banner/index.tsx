import React from 'react'

import logo from '@/assets/currency-tracker-icon.svg'

import {
  BannerLogo,
  BannerText,
  BannerTitle,
  StyledBanner,
  StyledBannerInfoContainer,
} from './styled'

export const Banner = () => {
  return (
    <StyledBanner>
      <StyledBannerInfoContainer>
        <div>
          <BannerTitle>
            Modsen Currency
            <br />
            Tracker
          </BannerTitle>
          <BannerText>
            Quotes for the dollar and other
            <br />
            international currencies.
          </BannerText>
        </div>
        <BannerLogo src={logo} />
      </StyledBannerInfoContainer>
    </StyledBanner>
  )
}
