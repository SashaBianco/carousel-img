import styled from 'styled-components'
import React from 'react'
import data from '../data'
import PrevItem from './PrevItem'
import NextItem from './NextItem'
import Item from './Item'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 600px;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const Items = (props) => {
  let prevIndex
  let nextIndex
  const currentIndex = props.index
  prevIndex = currentIndex === 0 ? prevIndex = props.lastIndex : prevIndex = currentIndex - 1
  nextIndex = currentIndex === props.lastIndex ? nextIndex = 0 : nextIndex = currentIndex + 1

  return (
      <Wrapper>
        <PrevItem
          isVisible = {props.isVisible}
          img = {data[prevIndex].img}
        />
        <Item
          img = {data[currentIndex].img}
          />
        <NextItem
            isVisible = {props.isVisible}
            img = {data[nextIndex].img}
        />
      </Wrapper>
  )
}

export default Items
