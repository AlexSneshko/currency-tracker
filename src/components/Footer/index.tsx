import { Link } from 'react-router-dom'
import logo from '@/assets/currency-tracker-icon.svg'
import {
  FooterCompanyInfoBlock,
  FooterCompanyText,
  FooterCompanyTitle,
  FooterContainer,
  FooterTableLinks,
  StyledFooter,
} from './styled'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterCompanyInfoBlock>
          <img src={logo} />
          <FooterCompanyTitle>Modsen Currency Tracker</FooterCompanyTitle>
          <FooterCompanyText>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </FooterCompanyText>
        </FooterCompanyInfoBlock>

        <FooterTableLinks>
          <thead>
            <tr>
              <th>General</th>
              <th>Product</th>
              <th>Community</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/">Market</Link>
              </td>
              <td>
                <Link to="/">Sparks</Link>
              </td>
              <td>
                <Link to="/">Ideas</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/">Service</Link>
              </td>
              <td>
                <Link to="/">Snaps</Link>
              </td>
              <td>
                <Link to="/">Streams</Link>
              </td>
            </tr>
          </tbody>
        </FooterTableLinks>
      </FooterContainer>
    </StyledFooter>
  )
}

export default Footer
