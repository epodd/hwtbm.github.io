import styled from 'styled-components';
import {
    LIGHT_GRAY,
    BLUE_1
} from "../../components/colors";

const widthAnswerBlock = '600px';

const GameScreenWrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const QuestionBlock: any = styled.div`
    padding-left: 70px;
    padding-top: 130px;
    width: 70%;
    background-color: ${LIGHT_GRAY};
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 250px;
    display: ${({open}: any) => open ? 'none' : 'flex'};
    
    @media (min-width: 870px) {
        display: flex;
    }
    
    @media (max-width: 870px) {
        width: 100%;
        align-items: center;
        padding-left: 0px;
    }
    
    @media (max-width: 320px) {
        width: 320px;
        align-items: center;
        padding-left: 0px;
    }
`;

const AnswerBlock = styled.div`
    width: ${widthAnswerBlock};
    display: flex;
    flex-wrap: wrap;
    
    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

const RankBlock: any = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 75px;
    
    @media (max-width: 870px) {
        display: ${({open}: any) => open ? 'flex' : 'none'};
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: scroll;
        padding: 0px;
    }
`;

const Question = styled.div`
    width: 80%;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 700;
    
    @media (max-width: 870px) {
        width: 450px;
        font-size: 30px;
        text-align: center;
        margin-bottom: 35px;
    }
    
    @media (max-width: 430px) {
        width: 260px;
        font-size: 26px;
    }
`;

const QuestionAlph = styled.div`
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: 500;
    font-size: 16px;
    margin-right: 10px;
    color: ${BLUE_1};
`;

const QuestionItemBlock = styled.div`
    display: flex;
    height: 100%;
`;

const QuestionPrizeItem: any = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 16px;
    font-family: sans-serif;
    height: 100%;
    width: 100%;
    color: ${(props: any = 'black') => props.color}
`;

const QuestionItem: any = styled.div`
    font-family: sans-serif;
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

const BurgerMenu: any = styled.div`
    width: 25px;
    height: 25px;
    position: fixed;
    right: 50px;
    top: 50px;
    z-index: 5000;
    cursor: pointer;
    display: none;
    
    &:before {
        content: '';
        position: absolute;
        border-radius: 17%;
        transition: .4s;

        top: ${({open}: any) => `${open ? '40%' : '20%'}`};
        left: 0;
        right: 0;
        height: 4px;
        background: black;
        transform: ${({open}: any) => `rotate(${open ? '45deg' : '0deg'})`};
    }
    
    &:after {
        content: '';
        position: absolute;
        border-radius: 17%;
        transition: .4s;
        bottom: ${({open}: any) => `${open ? '43%' : '20%'}`};
        left: 0;
        right: 0;
        height: 4px;
        background: black;
        transform: ${({open}: any) => `rotate(${open ? '-45deg' : '0deg'})`};
    }
    
    @media (max-width: 870px) {
        display: block;
    }
`;

export {
    GameScreenWrap,
    QuestionBlock,
    AnswerBlock,
    RankBlock,
    Question,
    QuestionAlph,
    QuestionItemBlock,
    QuestionPrizeItem,
    QuestionItem,
    BurgerMenu
};