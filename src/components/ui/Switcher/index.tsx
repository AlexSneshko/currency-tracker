import React, { useId } from 'react'

import { SwitchButton, SwitchCheckbox, SwitchLabel } from './styled'

export interface SwitcherProps {
  isOn: boolean
  handleToggle: React.ChangeEventHandler<HTMLInputElement>
}

export const Switcher: React.FC<SwitcherProps> = ({ isOn, handleToggle }) => {
  const switchNew = useId()
  return (
    <>
      <SwitchCheckbox checked={isOn} onChange={handleToggle} id={switchNew} />
      <SwitchLabel htmlFor={switchNew}>
        <SwitchButton />
      </SwitchLabel>
    </>
  )
}
