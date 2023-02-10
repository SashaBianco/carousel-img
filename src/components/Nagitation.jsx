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
        props.index === props.lastIndex 
                        ? props.setIndex(0)
                        : props.setIndex(props.index + 1);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const showPrevSlide = () => {
        props.index === 0 
                        ? props.setIndex(props.lastIndex) 
                        : props.setIndex(props.index - 1);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    return (
        <Wrapper>
            <Prev onClick={showPrevSlide}/>
            <Next onClick={showNextSlide}/>
        </Wrapper>
    )
}

export default Navigation;
