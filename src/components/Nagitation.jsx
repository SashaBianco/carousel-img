
import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 50px;
`
const Prev = styled.button`
    background: none;
    outline: none;
    border: none;
    margin-right: 16px;
    &::before {
        content: '←';
        font-size: 1.5em;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.5);
    }
`

const Next = styled.button`
    background: none;
    outline: none;
    border: none;
    margin-left: 16px;
    &::before {
        content: '→';
        font-size: 1.5em;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.5);
    }
`

const Navigation = (props) => {
  const showNextSlide = () => {
    props.index === props.lastIndex
      ? props.onChangeIndex(0)
      : props.onChangeIndex(props.index + 1)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const showPrevSlide = () => {
    props.index === 0
      ? props.onChangeIndex(props.lastIndex)
      : props.onChangeIndex(props.index - 1)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
        <Wrapper>
            <Prev onClick={showPrevSlide}/>
            <Next onClick={showNextSlide}/>
        </Wrapper>
  )
}

export default Navigation
