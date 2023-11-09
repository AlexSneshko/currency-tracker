import React from 'react'

import styles from './Switcher.module.scss'

export interface SwitcherProps {
  isOn: boolean
  handleToggle: React.ChangeEventHandler<HTMLInputElement>
}

const Switcher: React.FC<SwitcherProps> = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className={styles.switchLabel} htmlFor={`react-switch-new`}>
        <span className={styles.switchButton} />
      </label>
    </>
  )
}

export default Switcher
