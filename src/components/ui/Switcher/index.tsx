import React, { useId } from 'react'

import { SwitchButton, SwitchCheckbox, SwitchLabel } from './styled'

export interface SwitcherProps {
  isOn: boolean
  handleToggle: React.ChangeEventHandler<HTMLInputElement>
}

const Switcher: React.FC<SwitcherProps> = ({ isOn, handleToggle }) => {
  const switchNew = useId()
  return (
    // <>
    //   <input
    //     checked={isOn}
    //     onChange={handleToggle}
    //     className={styles.switchCheckbox}
    //     id={`react-switch-new`}
    //     type="checkbox"
    //   />
    //   <label
    //     className={classNames(styles.switchLabel, styles[theme.title])}
    //     htmlFor={`react-switch-new`}
    //   >
    //     <span
    //       className={classNames(styles.switchButton, styles[theme.title])}
    //     />
    //   </label>
    // </>
    <>
      <SwitchCheckbox checked={isOn} onChange={handleToggle} id={switchNew} />
      <SwitchLabel htmlFor={switchNew}>
        <SwitchButton />
      </SwitchLabel>
    </>
  )
}

export default Switcher
