import logo from '@/assets/currency-tracker-icon.svg'

import {
  BannerLogo,
  BannerText,
  BannerTitle,
  StyledBanner,
  StyledBannerInfoContainer,
} from './styled'
import React from 'react'

const Banner = () => {
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

export default Banner
