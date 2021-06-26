import React, { useContext, useEffect } from 'react'
import ColorContext from '../context/Color.context'

const Wrapper = ({ children }) => {
  const { increase } = useContext(ColorContext)
  useEffect(() => {
    console.log('useEffect called')
    console.log({ increase })
    increase()
  }, [increase])

  return <div>{children}</div>
}

export default Wrapper
