import logo from '@/assets/currency-tracker-icon.svg'
import { BannerLogo, BannerText, BannerTitle, StyledBanner } from './styled'

const Banner = () => {
  return (
    <StyledBanner>
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
    </StyledBanner>
  )
}

export default Banner
