import React from 'react'
import { useTheme } from 'styled-components'
import classNames from 'classnames'

import styles from './Switcher.module.scss'

export interface SwitcherProps {
  isOn: boolean
  handleToggle: React.ChangeEventHandler<HTMLInputElement>
}

const Switcher: React.FC<SwitcherProps> = ({ isOn, handleToggle }) => {
  const theme = useTheme()

  console.log(classNames(styles.switchLabel, theme.title))

  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={classNames(styles.switchLabel, styles[theme.title])}
        htmlFor={`react-switch-new`}
      >
        <span
          className={classNames(styles.switchButton, styles[theme.title])}
        />
      </label>
    </>
  )
}

export default Switcher
