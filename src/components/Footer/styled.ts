import styled from 'styled-components'

import { container, primaryTextColor } from '@/styles/global'

export const StyledFooter = styled.footer`
  ${container}
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterCompanyInfoBlock = styled.div`
  width: 30rem;
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
`

export const FooterCompanyText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
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
`

export const CopyrRightText = styled.p`
  text-align: center;
`
