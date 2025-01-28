import { useState,useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {

    
    
    const [userAnswers,setUserAnswers]=useState([]); //for collecting the answers

    const activeQuestionIndex= userAnswers.length ;
    const quizIsComplete=activeQuestionIndex===QUESTIONS.length; //checking that we dont exceed the no of questions we have
    
    
    const handleSelectAnswer= useCallback (function handleSelectAnswer(
        selectedAnswer
    ) {

        
        setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
        
    },
    []);//because we want to change the value whenever the activeQuestionIndex is selected



const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

    
    
    if(quizIsComplete)
        {
            return (
                <Summary userAnswers={userAnswers}/>
                
        );
    }

    
    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}/>
        </div>
    );

}