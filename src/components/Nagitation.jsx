import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 36px;
    margin-bottom: 36px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;
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
`;

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
`; 

const Navigation = (props) => {

    const showNextSlide = () => {
        props.value === props.lastIndex 
                        ? props.setValue(0)
                        : props.setValue(props.value + 1);
    }

    const showPrevSlide = () => {
        props.value === 0 
                        ? props.setValue(props.lastIndex) 
                        : props.setValue(props.value - 1);
    }

    return (
        <Wrapper>
            <Prev onClick={showPrevSlide}/>
            <Next onClick={showNextSlide}/>
        </Wrapper>
    )
}

export default Navigation;