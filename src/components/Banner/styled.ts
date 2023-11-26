import styled from 'styled-components'

import { primaryTextColor } from '@/styles/global'

export const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(
    253deg,
    #121212 11.77%,
    rgba(36, 121, 64, 0) 91.12%
  );
`

export const BannerTitle = styled.p`
  ${primaryTextColor};
  font-weight: 600;
  font-size: 6rem;
  text-align: right;
  margin: 0;
`

export const BannerText = styled.p`
  text-align: right;
  font-size: 1.5rem;
  font-weight: 300;
`
export const BannerLogo = styled.img`
  width: 18.75rem;
`
