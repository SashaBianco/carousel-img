import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px)  {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-areas:
            "tx tx tx im im"
  }
`;

const Text = styled.p`
    grid-area: tx;
    margin-top: 36px;
    @media (min-width: 1024px)  {
        margin-right: 16px;
  }
`;

const Image = styled.div`
  grid-area: im;
  height: 360px;
  width: 311px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  background-image: url(${props => props.img});
  background-size: cover;
  background-size: 200px auto;
  background-repeat: no-repeat;
  background-position: center;
  margin: 36px auto 0;
  

  @media (min-width: 1024px) {
    margin-left: calc(100% - 311px);
  }
`;



const ContentBox = (props) => {

    return (
        <Wrapper>
            <Text>{props.currentSlide.text}</Text>
            <Image 
              img = {props.img}
            /> 
        </Wrapper>  
    )
}

export default ContentBox;