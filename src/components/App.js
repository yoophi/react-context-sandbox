import React, { useContext, useEffect } from 'react'
import ColorContext from '../context/Color.context'
import ColorProvider from './provider/Color.provider'
import Red from './Red'
import Wrapper from './Wrapper'

const App = () => {
  const { increase } = useContext(ColorContext)
  useEffect(() => {
    console.log('useEffect called')
    console.log({ increase })
    increase()
  }, [increase])

  return (
    <ColorProvider>
      <Wrapper>
        <Red />
      </Wrapper>
    </ColorProvider>
  )
}
export default App
