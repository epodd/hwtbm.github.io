import {Component} from 'react';
import {
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
    RightLine,
    Borders as BordersBlock
} from './border-elements';


type Props = {
    onClick?: () => void,
    children?: any,
    colorBorder?: string,
    colorBg?: string,
    width?: string
}

type State = {

}

class Borders extends Component<Props, State> {
    render() {
        const {
            onClick,
            children,
            colorBg,
            colorBorder,
            width
        } = this.props;

        return (
            <BordersBlock
                onClick={onClick}
                width={width}
            >
                <LeftLineBlock>
                    <LeftLine colorBorder={colorBorder}/>
                </LeftLineBlock>
                <LeftCornerBlock>
                    <LeftCorner colorBorder={colorBorder}/>
                </LeftCornerBlock>
                <MainBlock>
                    <MainBlock1 colorBorder={colorBg}/>
                    <MainBlock2 colorbg={colorBg} colorBorder={colorBorder}>
                        {children}
                    </MainBlock2>
                    <MainBlock3 colorBorder={colorBg}/>
                </MainBlock>
                <RightCornerBlock>
                    <RightCorner colorBorder={colorBorder}/>
                </RightCornerBlock>
                <RightLineBlock>
                    <RightLine colorBorder={colorBorder}/>
                </RightLineBlock>
            </BordersBlock>
        );
    }
}

export default Borders;