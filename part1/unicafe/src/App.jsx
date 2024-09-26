//thre buttons (good, neutral, bad)
//useState for tracking feedback of every person for every button
import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
    <h1>{props.title}</h1>
    <br />
      <h4>Good: {props.good}</h4>
      <h4>Neutral: {props.neutral}</h4>
      <h4>Bad: {props.bad}</h4>
      <h4>All: {props.total}</h4>
      <br />
      <h4>Average: {props.average}</h4>
      <h4>Positive percentage: {props.percentage}</h4>
    </>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = () => {
    setGood(good + 1);
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  }

  const badFeedback = () => {
    setBad(bad + 1);
  }

  const total = good + neutral + bad;
  const average = (good * 1) + (neutral * 0) + (bad * -1) / total;
  const percentage = (((good * 1)) / total) * 100 + " %";
 
  return (
    <>
      <h1>Give Feedback</h1>
      <br />
      <button onClick={goodFeedback}>Good</button>
      <button onClick={neutralFeedback}>Neutral</button>
      <button onClick={badFeedback}>Bad</button>
      <br />
      <Statistics title="Statistics" good={good} neutral={neutral} bad={bad} average={average} percentage={percentage} total={total}/>
    </>
  )
}

export default App
