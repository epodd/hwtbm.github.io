import React, {Component} from 'react';
import './App.scss';
import StartScreen from './containers/start-screen/start-screen';
import GameScreen from './containers/game-screen/game-screen';
import ResultScreen from './containers/result-screen/result-screen';

type Props = {

}
type State = {

}

class App extends Component<Props, State> {
    state = {
        path: '',
        wonDollars: ''
    }

    componentDidMount() {
        this.setScreen('startScreen');
    }

    setScreen = (path: string) => {
        this.setState({path});
    }

    setWonDollars = (wonDollars: string) => {
        this.setState({wonDollars});
    }

    render() {
        const {
            path,
            wonDollars
        } = this.state;

        return (
            <div>
                {
                    {
                        'startScreen': <StartScreen
                            onClick={() => this.setScreen('gameScreen')}
                        />,
                        'gameScreen': <GameScreen
                            onClick={() => this.setScreen('resultScreen')}
                            setWonDollars={this.setWonDollars}
                        />,
                        'resultScreen': <ResultScreen
                            onClick={() => this.setScreen('gameScreen')}
                            wonDollars={wonDollars}
                        />
                    }[path]
                }
            </div>
        );
    }
}

export default App;