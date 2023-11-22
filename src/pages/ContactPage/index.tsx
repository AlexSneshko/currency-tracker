import { socialData } from '@/constants/socials'
import {
  BlockSocialItem,
  ContactPageLayout,
  ContactsItem,
  ContactsTitle,
  IconFooter,
} from './styled'

const ContactPage = () => {
  return (
    <ContactPageLayout>
      <div>
        <ContactsTitle>Contacts US</ContactsTitle>
        <ContactsItem>
          <b>E-mail:</b> contact@modsen-software.com
        </ContactsItem>
        <ContactsItem>
          <b>Phone:</b> +48501157180
        </ContactsItem>
        <ContactsItem>Stefana Okrzei 1a/10</ContactsItem>
        <ContactsItem>Warsaw, Poland</ContactsItem>
      </div>

      <BlockSocialItem>
        {socialData.map(({ id, href, img }) => {
          return (
            <a key={id} href={href} target="_blank" rel="noreferrer">
              <IconFooter src={img} alt={href} title={href} />
            </a>
          )
        })}
      </BlockSocialItem>
    </ContactPageLayout>
  )
}

export default ContactPage
