import { useRef, useState } from 'react';
import './style.css';
import * as uuid from 'uuid';

/**
 * 
 * @param {Object} props 
 * @param {string} props.question
 * @param {string[]} props.answers
 * @param {number} props.correctAnswer
 * @returns 
 */
const SingleAnswerComponent = (props) => {

  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [wrongAnswersCount, setWrongAnswersCount] = useState(0);

 let selectedAnswerIndex = null;

 const radioClick = (index) => {
  selectedAnswerIndex = index;
  wrongRef.current.classList.remove('selected');
  correctRef.current.classList.remove('selected');
 };

 const correctRef = useRef();
 const wrongRef = useRef();

 const checkOnClick = () => {
  if (selectedAnswerIndex === props.correctAnswer) {
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
buttonClass += ' button';

 const qId = uuid.v1();

 return (
  <div className='question single-answer'>
   <div><h3>{props.question}</h3></div>
   <div className='answers'>
    {props.answers.map((answer, i) => {
     const id = uuid.v1();
     return (<div>
      <input
       id={id}
       type='radio'
       name={`group-${qId}`}
       onClick={() => radioClick(i)}
      />
      <label for={id}>{answer}</label>
     </div>);
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
            {props.answers[props.correctAnswer]}
          </div>
    )}
   </div>
  </div>
 );
};

export default SingleAnswerComponent;