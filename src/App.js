/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import data from './data'
import Navigation from './components/Nagitation'
import Items from './components/Items'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
`

function App () {
  const [index, setIndex] = useState(0)
  const lastIndex = data.length - 1
  const [isVisible, setVisible] = useState(() => {
    if (window.innerWidth >= 768) {
      return true
    } else return false
  })
  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return (

    <Wrapper>
      <Items
        isVisible = {isVisible}
        index = {index}
        lastIndex = {lastIndex}
      />
      <Navigation
        index = {index}
        lastIndex = {lastIndex}
        onChangeIndex = {setIndex}
      />
    </Wrapper>
  )
}

export default App
