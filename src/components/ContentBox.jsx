import styled from "styled-components";
import brazil from '../image/brazil.png';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px)  {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
            "tx im"
            "if im"
  }
`;

const Text = styled.p`
    grid-area: tx;
    margin-top: 36px;
    @media (min-width: 1024px)  {
        margin-right: 32px;
  }
`;

const Image = styled.div`
  grid-area: im;
  height: 360px;
  width: 311px;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  background-image: url(${brazil});
  background-size: cover;
  background-size: 200px auto;
  background-repeat: no-repeat;
  background-position: center;
  margin: 36px auto 0;

  @media (min-width: 1024px) {
    margin-left: calc(100% - 311px);
  }
`;

const Info = styled.div`
    grid-area: if;
`;

const ContentBox = () => {
    return (
        <Wrapper>
            <Text>The FIFA World Cup, often simply called the World Cup, is an 
                  international association football competition contested by 
                  the senior men's national teams of the members of the
                  Fédération Internationale de Football Association (FIFA), the 
                  sport's global governing body. The tournament has been held 
                  every four years since the inaugural tournament in 1930, 
                  except in 1942 and 1946 when it was not held because of the 
                  Second World War.
            </Text>
            <Info>
                <h3>Brazil</h3>
                <p>1958, 1962, 1970, 1994, 2002</p>
            </Info>
            <Image />
        </Wrapper>  
    )
}

export default ContentBox;