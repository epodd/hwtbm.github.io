import styled from "styled-components";

const StartScreenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const StartScreenImage = styled.img`
    width: 400px;
    height: 270px;
    
    @media (max-width: 320px) {
        width: 250px;
        height: 200px;
    }
`;

const StartScreenBlock = styled.div`
    width: 900px;
    height: 300px;
    display: flex;
    
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const StartScreenInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    
    @media (max-width: 768px) {
        align-items: center;
    }
    
    @media (max-width: 320px) {
        align-items: center;
    }
`;

const StartScreenTitle = styled.div`
    width: fit-content;
    font-size: 46px;
    font-family: sans-serif;
    font-weight: 700;
    color: black;
    margin-bottom: 35px;
    
    @media (max-width: 768px) {
        text-align: center;
        font-size: 36px;
    }
    
    @media (max-width: 320px) {
        font-size: 26px;
    }
`;

export {
    StartScreenWrapper,
    StartScreenImage,
    StartScreenBlock,
    StartScreenInfoBlock,
    StartScreenTitle
};