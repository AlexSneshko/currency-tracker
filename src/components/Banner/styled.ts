import styled from 'styled-components'

import { primaryTextColor } from '@/styles/global'

export const StyledBanner = styled.div`
  display: flex;
  background: linear-gradient(
    253deg,
    #121212 11.77%,
    rgba(36, 121, 64, 0.4) 50%,
    rgba(36, 121, 64, 0) 91.12%
  );
`

export const StyledBannerInfoContainer = styled.div`
  max-width: 80rem;
  display: flex;
  gap: 5.56rem;
`

export const BannerTitle = styled.p`
  ${primaryTextColor};
  width: 100%;
  font-weight: 600;
  font-size: 6rem;
  text-align: right;
  margin: 0;

  @media (max-width: 48rem) {
    font-size: 2.42rem;
    text-align: center;
  }
`

export const BannerText = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 48rem) {
    text-align: center;
  }
`
export const BannerLogo = styled.img`
  width: 18.75rem;
  margin: 0;

  @media (max-width: 48rem) {
    display: none;
  }
`
