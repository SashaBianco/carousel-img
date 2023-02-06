import styled from "styled-components";
import Box from "./components/Box";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Wrapper>
      <Box/>
    </Wrapper>
  );
}

export default App;
