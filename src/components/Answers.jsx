import {useRef} from 'react';


export default function Answers({answers,selectedAnswer,answerState,onSelect})
{
    const shuffledAnswers=useRef();
    if(!shuffledAnswers.current) {
        shuffledAnswers.current =[...answers]; //so that i dont manipulate the original answer
        shuffledAnswers.current.sort(() =>Math.random()-0.5); //mathrandom will give value b/w 0 to 1 (1 excluded) and will deduct 0.5
        
    }
    return (
        <ul id="answers">
                    {shuffledAnswers.current.map((answer) => {
                        const isSelected = selectedAnswer === answer;
                        let cssClass = '';

                        if (answerState === 'answered' && isSelected) {
                            cssClass = 'selected';
                        }

                        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                            cssClass = answerState;
                        }

                        return (
                            <li key={answer} className="answer">
                                <button
                                    onClick={() => onSelect(answer)}
                                    className={cssClass}
                                    disabled={answerState !== ''} // Disable buttons after selection
                                >
                                    {answer}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                );
}