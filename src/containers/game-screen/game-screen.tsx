import React, {Component} from 'react';
import {
    LIGHT_GRAY,
    BLUE_1,
    LIGHT_BLUE,
    BLUE_3,
    BLACK_GRAY,
    LIGHT_GREEN,
    BLACK_GREEN,
    LIGHT_RED, BLACK_RED
} from "../../components/colors";
import Borders from '../../components/borders/borders'
import QuestionsData from '../../data/questions.json'
import {
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
} from './game-screen-elements'
import {
    answersAlph,
    rankFromLvl,
    widthAnswerEl,
    timeToNextStep
} from '../../data/auxiliary'

type Props = {
    onClick?: () => void,
    setWonDollars: (arg: string) => void
}

type QuestionType = {
    question: string,
    answer: string,
    answers: any
}

interface State {
    lvl: number,
    questions: QuestionType[] | [],
    currentQuestion: QuestionType | {},
    status: string,
    selectedAnswer: string,
    openRankMenu: boolean
}

class GameScreen extends Component<Props, State> {
    state = {
        lvl: 0,
        questions: [],
        currentQuestion: {answer: ''},
        status: '',
        selectedAnswer: '',
        openRankMenu: false
    }

    componentDidMount() {
        const {questions} = QuestionsData;
        const randomizeQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 12);
        this.setState({
            questions: randomizeQuestions,
            currentQuestion: randomizeQuestions[0],
            status: '',
            selectedAnswer: '',
            openRankMenu: false,
            lvl: 0
        })
    }

    handleCheckResult = (answer: string) => {
        const {questions, lvl}: any = this.state;
        const answerQuestion = questions[lvl];

        this.setState({selectedAnswer: answer});

        if (lvl === 11) {
            this.handleGameOver(rankFromLvl[lvl]);
            return;
        }

        setTimeout(() => {
            if (answerQuestion && answerQuestion.answer.toLowerCase() === answer.toLowerCase()) {
                this.setState({status: 'bingo'});
                this.handleNextLvl();
            } else {
                this.setState({status: 'wrong'});
                this.handleGameOver(rankFromLvl[lvl - 1] || '$0');
            }
        }, timeToNextStep);
    }

    handleOpenRankMenu = () => {
        this.setState((prevState) => {
            return {
                openRankMenu: !prevState.openRankMenu
            }
        });
    }

    handleGameOver = (won: string) => {
        const {
            setWonDollars,
            onClick
        } = this.props;
        setWonDollars(won);
        setTimeout(() => {
            if (onClick) {
                onClick();
            }
        }, timeToNextStep);
    }

    handleNextLvl = () => {
        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    lvl: prevState.lvl + 1,
                    selectedAnswer: '',
                    status: ''
                }
            })
        }, timeToNextStep);
    }

    generateErrors = (index: number) => {
        const {selectedAnswer, lvl, questions, status} = this.state;
        const currentQuestion: any = questions[lvl];
        const getCurrentAnswer =  answersAlph[index];
        const selectedItem = selectedAnswer && selectedAnswer === getCurrentAnswer;
        const successAnswer = currentQuestion && currentQuestion.answer === getCurrentAnswer.toLowerCase();
        let colorBg;
        let colorBorder;

        colorBg = selectedItem ? LIGHT_BLUE : LIGHT_GRAY;
        colorBorder = selectedItem ?  BLUE_3 : BLACK_GRAY;

        if (status === 'bingo' && selectedItem) {
            colorBg = LIGHT_GREEN;
            colorBorder = BLACK_GREEN;
        }

        if (status === 'wrong') {
            if (selectedAnswer === getCurrentAnswer) {
                colorBg = LIGHT_RED;
                colorBorder = BLACK_RED;
            }

            if (successAnswer) {
                colorBg = LIGHT_GREEN;
                colorBorder = BLACK_GREEN;
            }
        }

        return {colorBg, colorBorder};
    }

    renderAnswers = (answers: string[] | unknown[]) => {
        return answers.map((el, i) => {
            const {colorBg, colorBorder} = this.generateErrors(i);
            const uniqId = Math.random() + i;
            return (
                <Borders
                    key={uniqId}
                    width={widthAnswerEl}
                    colorBg={colorBg}
                    colorBorder={colorBorder}
                    onClick={() => this.handleCheckResult(answersAlph[i])}
                >
                    <QuestionItemBlock>
                        <QuestionAlph>
                            {answersAlph[i]}
                        </QuestionAlph>
                        <QuestionItem>
                            {el}
                        </QuestionItem>
                    </QuestionItemBlock>
                </Borders>
            )
        });
    }

    renderRanks = (ranks: [string, string][] | unknown[]) => {
        const {lvl} = this.state;
        return ranks.reverse().map(([rank, prize]: any) => {
            let colorBorder;
            const uniqId = Math.random();
            const rankNumb = Number(rank);
            const currentRank = rankNumb === lvl;
            const rankLower = rankNumb < lvl;

            if (currentRank) {
                colorBorder = BLUE_1;
            }

            if (rankLower) {
                colorBorder = LIGHT_GRAY;
            }

            return (
                <Borders
                    key={uniqId}
                    width={'100%'}
                    colorBorder={colorBorder}
                >
                    <QuestionPrizeItem color={rankLower ? LIGHT_GRAY : currentRank ? BLUE_1 : null}>
                        {prize}
                    </QuestionPrizeItem>
                </Borders>
            )
        })
    }

    render() {
        const {
            questions,
            lvl,
            openRankMenu
        } = this.state;
        const currentQuestion: QuestionType = questions[lvl];
        const answers = currentQuestion && Object.values(currentQuestion.answers);
        const rankFromLvlArr = Object.entries(rankFromLvl);

        return (
            <GameScreenWrap>
                <BurgerMenu
                    open={openRankMenu}
                    onClick={() => this.handleOpenRankMenu()}
                />
                <QuestionBlock open={openRankMenu}>
                    <Question>{currentQuestion && currentQuestion.question}</Question>
                    <AnswerBlock>
                        {
                            answers && this.renderAnswers(answers)
                        }
                    </AnswerBlock>
                </QuestionBlock>
                <RankBlock open={openRankMenu}>
                    {
                        this.renderRanks(rankFromLvlArr)
                    }
                </RankBlock>
            </GameScreenWrap>
        );
    }
}

export default GameScreen;