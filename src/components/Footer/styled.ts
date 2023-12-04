import styled from 'styled-components'

import { container, primaryTextColor } from '@/styles/global'

export const StyledFooter = styled.footer`
  max-width: 76rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`

export const FooterCompanyInfoBlock = styled.div`
  max-width: 30rem;
  width: 100%;
  margin-right: 6.5rem;

  img {
    width: 2rem;
    margin-right: 1rem;
  }
`

export const FooterCompanyTitle = styled.span`
  ${primaryTextColor}
  font-weight: 600;
  font-size: 1.625rem;
  text-align: right;

  @media (max-width: 48rem) {
    font-size: 1.25rem;
  }
`

export const FooterCompanyText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 48rem) {
    display: none;
  }
`

export const FooterTableLinks = styled.table`
  height: 10rem;
  th,
  td {
    width: 15rem;
    text-align: left;
    font-weight: 400;
  }
  th {
    font-size: 1.75rem;
  }
  td a {
    text-decoration: none;
    color: #898989;
    font-size: 1.5rem;
  }

  @media (max-width: 48rem) {
    display: none;
  }
`

export const CopyRightText = styled.p`
  text-align: center;
  color: #898989;
  font-size: 1rem;
  font-weight: 400;
`
