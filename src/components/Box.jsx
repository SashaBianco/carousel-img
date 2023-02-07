import styled from "styled-components";
import ContentBox from "./ContentBox";
import Navigation from "./Nagitation";
import data from '../data';
import { useState } from "react";

const Wrapper = styled.div`
  height: 100%;
  width: 375px;
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  @media (min-width: 768px)  {
    margin-top: 75px;
    width: 80%;
    height: auto;
    margin: 32px;
  }
  @media (min-width: 1200px)  {
    margin-top: 150px;
    width: 50%;
    height: auto;
 }
`;

const Title = styled.h2`
  margin-bottom: 30px;
`;

const Box = () => {
    const [value, setValue] = useState(0);
    const arr = [...data];
    console.log(arr);
    const lastIndex = arr.length - 1;
    const currentSlide = arr[value];

    return (
        <Wrapper>
            <Title> {currentSlide.year} year. {currentSlide.country}</Title>
            <ContentBox 
              currentSlide = {currentSlide}
              img = {currentSlide.url}
            />
            <Navigation
              lastIndex = {lastIndex}
              value = {value}
              setValue = {setValue}
            />
        </Wrapper>
    )
}

export default Box;