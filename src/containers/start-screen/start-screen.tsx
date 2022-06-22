import React, {Component} from 'react';
import {
    StartScreenWrapper,
} from './start-scree-elements';
import ViewScreen from '../../components/view-screens/view-screen';

type Props = {
    onClick: () => void
}
type State = {

}

class StartScreen extends Component<Props, State> {
    render() {
        const {
            onClick
        } = this.props;

        return (
            <StartScreenWrapper>
                <ViewScreen onClick={onClick} template={'Who wants to be a millionaire?'}/>
            </StartScreenWrapper>
        );
    }
}

export default StartScreen;