import React, {Component} from 'react';
import styled from 'styled-components';
import {
    BLUE_1,
    BLUE_2,
    BLUE_3
} from '../colors';

type Props = {
    onClick?: () => void,
    title?: string,
    children?: any,
    width?: string;
    color?: string,
    height?: string
}

type State = {

}

type ButtonType = {
    width?: string,
    height?: string,
    color?: string
}

const width = (props: ButtonType) => props.width;
const height = (props: ButtonType) => props.height;
const color = (props: ButtonType) => props.color;

const Buttons = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7%;
    background: ${color};
    width: ${width};
    height: ${height};
    color: white;
    font-weight: 500;
    font-size: 20;
    cursor: pointer;
    border: 0px;
    transition: .4s;
    
    &:hover {
        background: ${BLUE_1}
    }
    
    &:active {
        background: ${BLUE_3}
    }
`;

class Button extends Component<Props, State> {
    render() {
        const {
            onClick,
            title,
            color,
            width,
            height
        } = this.props;

        return (
            <Buttons
                onClick={onClick}
                color={color || BLUE_2}
                width={width}
                height={height}
            >
                {title}
            </Buttons>
        );
    }
}

export default Button;