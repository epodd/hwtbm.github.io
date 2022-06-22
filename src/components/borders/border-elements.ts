import styled from 'styled-components';
import {
    BLACK_GRAY,
    WHITE
} from '../colors'

// Тут конечно можно было бы почистить кучу свойств и сыграть на наследования в sc,
// так конечно только для полигон задания

const colorbg = (props: { colorbg?: string }) => props.colorbg;
const width = (props: { width?: string }) => props.width;

const Borders = styled.div`
    display: flex;
    height: 50px;
    width: ${width};
    align-items: center;
    margin-bottom: 15px;
    
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const LeftLineBlock = styled.div`
    display: flex;
    align-items: center;
    width: 70px;
`;

const LeftLine: any = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({colorBorder = BLACK_GRAY}: any) => colorBorder};
`;

const LeftCornerBlock = styled.div`
    height: 100%;
`;

const LeftCorner: any = styled.div`
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-right: ${({colorBorder = BLACK_GRAY}: any) => `35px solid ${colorBorder}`};
    border-bottom: 25px solid transparent;
    margin-left: -2px;
`;

const MainBlock = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const MainBlock1: any = styled.div`
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: -32px;
    border-top: 25px solid transparent;
    border-right: ${({colorBorder = WHITE}: any) => `35px solid ${colorBorder}`};
    border-bottom: 25px solid transparent;
    cursor: pointer;
`;

const MainBlock2: any = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 92%;
    border-top: ${({colorBorder = BLACK_GRAY}: any) => `2px solid ${colorBorder}`};
    border-bottom: ${({colorBorder = BLACK_GRAY}: any) => `2px solid ${colorBorder}`};
    background-color: ${colorbg};
    z-index: 1000;
    cursor: pointer;
`;

const MainBlock3: any = styled.div`
    width: 0;
    top: 0;
    right: -32px;
    position: absolute;
    height: 0;
    border-top: 25px solid transparent;
    border-left: ${({colorBorder = WHITE}: any) => `35px solid ${colorBorder}`};
    border-bottom: 25px solid transparent;
    cursor: pointer;
`;

const RightCornerBlock = styled.div`
    height: 100%;
`;

const RightCorner: any = styled.div`
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-left: ${({colorBorder = BLACK_GRAY}: any) => `35px solid ${colorBorder}`};
    border-bottom: 25px solid transparent;
    margin-right: -2px;
`;

const RightLineBlock = styled.div`
    display: flex;
    align-items: center;
    width: 70px;
`;

const RightLine: any = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({colorBorder = BLACK_GRAY}: any) => colorBorder};
`;

export {
    Borders,
    LeftLineBlock,
    LeftLine,
    LeftCornerBlock,
    LeftCorner,
    MainBlock,
    MainBlock1,
    MainBlock2,
    MainBlock3,
    RightCornerBlock,
    RightCorner,
    RightLineBlock,
    RightLine
};

