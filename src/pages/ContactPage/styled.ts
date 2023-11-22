import { container } from '@/styles/global'
import styled from 'styled-components'

export const ContactPageLayout = styled.main`
  ${container}
  display: flex;
  align-items: center;
  margin: 6rem auto;
`

export const ContactsTitle = styled.div`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 20px;
`

export const BlockSocialItem = styled.div`
  flex: 1;
  display: flex;
`

export const IconFooter = styled.img`
  width: 3rem;
  height: 3rem;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`
export const ContactsItem = styled.div`
  font-size: 1rem;
`
