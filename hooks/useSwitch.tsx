import { useState } from 'react'

function useSwitch(initialState = false) {
  const [enabled, setEnabled] = useState(initialState)

  const toggleSwitch = () => setEnabled((prevState) => !prevState)

  return [enabled, toggleSwitch] as const
}

export { useSwitch }
