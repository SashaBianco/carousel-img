import styled from 'styled-components'
import Box from './components/Box'
import React from 'react'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App () {
  return (
    <Wrapper>
      <Box/>
    </Wrapper>
  )
}

export default App
