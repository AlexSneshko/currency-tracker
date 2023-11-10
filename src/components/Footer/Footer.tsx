import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import logo from '@/assets/currency-tracker-icon.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.companyInfoBlock}>
          <img src={logo} />
          <span className={styles.companyTitle}>Modsen Currency Tracker</span>
          <p className={styles.companyText}>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </p>
        </div>
        <table className={styles.tableLinks}>
          <tr>
            <th>General</th>
            <th>Product</th>
            <th>Community</th>
          </tr>
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
        </table>
      </div>

      <p className={styles.copyRightText}>
        Startsup © 2023-2024, All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer
