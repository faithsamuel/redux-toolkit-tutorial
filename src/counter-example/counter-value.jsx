import React from 'react'
import { useSelector } from 'react-redux'

function COunterValue() {

    const state = useSelector(state=> state);
    const {countValue} = state;

  return (
    <p>Counter Value is: {countValue}</p>
  )
}

export default COunterValue