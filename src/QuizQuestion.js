import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.state = ({incorrectAnswer: false});
    }

    handleClick = (buttonText) => {
        // console.log('handle click... new QuizQuestion', buttonText);
        // console.log(this.props.quiz_question.answer);
        if (buttonText === this.props.quiz_question.answer ){
            this.setState({incorrectAnswer:false})
            this.props.showNextQuestionHandler();
        } else {
            this.setState({incorrectAnswer:true})
            this.textBGColor = this.getRandomBG();
        }
    }

    textBGColor = {backgroundColor:`#EEE`}
    getRandomBG = () => {
        const a = Math.floor((Math.random() * 255));
        const b = Math.floor((Math.random() * 100));
        const c = Math.floor((Math.random() * 160));
        return {backgroundColor:`rgb(${a}, ${b}, ${c})`, color: `#FFF`}
    }

    render() {
        return (
            <main>
                <section>
                 <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    {
                        this.props.quiz_question.answer_options.map(
                            (answer_option, index) => <QuizQuestionButton 
                                key={index} 
                                button_text={answer_option} 
                                clickHandler={this.handleClick}
                                />
                        )
                    }
                </ul>
                </section>
                { (this.state.incorrectAnswer) ? <p style={this.textBGColor}>Sorry, that's not right</p> : null}
            </main>
        )
    }
}

export default QuizQuestion