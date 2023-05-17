import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 200px;
  margin-left: 160px;
  height: 400px;
  border: 1px solid #D9D9D9;
  background: #fff;
  background-image: url(${props => props.img});
  background-size: cover;
  background-size: 150px auto;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1024px) {
    width: 200px;
    height: 400px;
  }
  
  ${({ isVisible }) => isVisible
                              ? 'display: flex;'
                              : 'display: none;'
  }
`

const ImageBackground = styled.div`
  position: absolute;
  width: 200px;
  height: 400px;
`

const NextItem = (props) => {
  return (
        <Wrapper
          isVisible = {props.isVisible}
          img = {props.img}
        >
        <ImageBackground />
        </Wrapper>
  )
}
export default NextItem
