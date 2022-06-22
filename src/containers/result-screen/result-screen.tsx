import React, {Component} from 'react';
import {
    ResultScreenWrapper,
    ResultScreenTemplate,
    ResultScreenTotalScore,
    ResultScreenEarned
} from './result-screen-elements';
import ViewScreen from "../../components/view-screens/view-screen";

type Props = {
    onClick: () => void,
    wonDollars: string
}
type State = {

}

class ResultScreen extends Component<Props, State> {
    render() {
        const {
            onClick,
            wonDollars
        } = this.props;

        return (
            <ResultScreenWrapper>
                <ViewScreen
                    onClick={onClick}
                    template={
                        <ResultScreenTemplate>
                            <ResultScreenTotalScore>Total score:</ResultScreenTotalScore>
                            <ResultScreenEarned>{wonDollars} earned</ResultScreenEarned>
                        </ResultScreenTemplate>
                    }
                />
            </ResultScreenWrapper>
        );
    }
}

export default ResultScreen;