import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 375px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  @media (min-width: 1024px) {
    width: 550px;
    height: 600px;
  }
`

const Image = styled.div`
  height: 500px;
  width: calc(375px - 32px);
  border: 1px solid #D9D9D9;
  background: #fff;
  background-image: url(${props => props.img});
  background-size: cover;
  background-size: 400px auto;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 1024px) {
    width: 550px;
    height: 600px;
  }
`

const Item = (props) => {
  return (
    <Wrapper>
        <Image
          img = {props.img}
        />
    </Wrapper>
  )
}
export default Item
