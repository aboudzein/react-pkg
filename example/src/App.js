import React from 'react'
import { useMyHook } from '@aboudzein/react-pkg'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App