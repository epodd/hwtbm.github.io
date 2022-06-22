import React, {Component} from 'react';
import Button from '../../components/buttons/buttons';
import {
    StartScreenImage,
    StartScreenBlock,
    StartScreenInfoBlock,
    StartScreenTitle
} from './view-screen-elements';
const image = require('../../images/startscreenimg.png');

type Props = {
    onClick: () => void,
    template?: any
}
type State = {

}

class ViewScreen extends Component<Props, State> {
    render() {
        const {
            onClick,
            template
        } = this.props;

        return (
            <StartScreenBlock>
                <StartScreenImage src={image} />
                <StartScreenInfoBlock>
                    <StartScreenTitle>{template}</StartScreenTitle>
                    <Button
                        onClick={onClick}
                        title="Start"
                        width="120px"
                        height="30px"
                    />
                </StartScreenInfoBlock>
            </StartScreenBlock>
        );
    }
}

export default ViewScreen;