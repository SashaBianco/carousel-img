import styled from "styled-components";
import ContentBox from "./ContentBox";
import Navigation from "./Nagitation";

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
    return (
        <Wrapper>
            <Title>World Cup Football Winners</Title>
            <ContentBox />
            <Navigation/>
        </Wrapper>
    )
}

export default Box;