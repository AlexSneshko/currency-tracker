import styles from './Banner.module.scss'
import logo from '@/assets/currency-tracker-icon.svg'

const Banner = () => {
  return (
    <div role="banner" className={styles.banner}>
      <div>
        <p className={styles.bannerTitle}>
          Modsen Currency
          <br />
          Tracker
        </p>
        <p className={styles.bannerText}>
          Quotes for the dollar and other
          <br />
          international currencies.
        </p>
      </div>

      <img src={logo} className={styles.bannerLogo} />
    </div>
  )
}

export default Banner
