import { useRef, useState } from 'react';
import './style.css';
import * as uuid from 'uuid';

const isArrayEqual = (selected, correct) => {

 if (selected.length !== correct.length) {
  return false;
 }
 return correct.filter(e => !selected.includes(e)).length === 0;
};

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number[]} props.correctAnswer
 * @returns 
 */
const MultiAnswerComponent = (props) => {

    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [wrongAnswersCount, setWrongAnswersCount] = useState(0);
  let selectedAnswerIndex = [];
 const checkboxClick = (index, status) => {
    if (status) {
      selectedAnswerIndex.push(index);
    } else {
      selectedAnswerIndex = selectedAnswerIndex.filter(e => e !== index);
    }
    wrongRef.current.classList.remove('selected');
    correctRef.current.classList.remove('selected');
 };

 const correctRef = useRef();
 const wrongRef = useRef();

 const checkOnClick = () => {
    if (isArrayEqual(selectedAnswerIndex, props.correctAnswer)) {
      correctRef.current.classList.add('selected');
      wrongRef.current.classList.remove('selected');
    } else {
      wrongRef.current.classList.add('selected');
      correctRef.current.classList.remove('selected');
      setWrongAnswersCount((prevCount) => prevCount + 1);
    }
  };

 const handleShowCorrectAnswer = () => {
    if (wrongAnswersCount >= 3) {
      correctRef.current.classList.add('selected');
      setShowCorrectAnswer(true);
    }
  };

  let buttonClass = 'button';
  if (showCorrectAnswer) {
    buttonClass += ' visible';
  } else {
    buttonClass += ' hidden';
  }

  return (
    <div className='question single-answer'>
     <div><h3>{props.question}</h3></div>
     <div className='answers'>
       {props.answers.map((answer, i) => {
        const id = uuid.v1();
        return (
         <div key={id}>
          <input
            id={id}
            type='checkbox'
            onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
            />
            <label htmlFor={id}>{answer}</label>
         </div>
         );
       })}
      </div>
      <div className='check'>
       <div className='button' onClick={checkOnClick}>
        check my answer
        <div ref={correctRef} className='correct'>correct</div>
        <div ref={wrongRef} className='wrong'>wrong</div>
       </div>
      </div>
      <div className='answer' >
       <div className={buttonClass} onClick={handleShowCorrectAnswer}>
        show me correct answer
       </div>
       {showCorrectAnswer && (
        <div className='correct-answer' style={{ color: 'green' }}>
        {props.answers[props.correctAnswer[0]]}
       </div>
       )}
      </div>
    </div>
  );
};

export default MultiAnswerComponent;