//thre buttons (good, neutral, bad)
//useState for tracking feedback of every person for every button
import { useState } from 'react'

const StatisticLine = (props) => {

  const text = String(props.text);
  const feedback = String(props.feedback);


  if (props.feedback === 0 || isNaN(props.feedback)) {
    return (
      <h4>No Feedback given</h4>
    )
  } else {
    return (
      <>
      <table>
        <tbody>
          <tr>
            <th><h4>{text}</h4></th>
            <td><h4>{feedback}</h4></td>
          </tr>
        </tbody>
      </table>
      </>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.click}>
      {props.name}
    </button>
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
  const percentage = (((good * 1)) / total) * 100;
 
  return (
    <>
      <h1>Give Feedback</h1>
      <br />
      <Button click={goodFeedback} name="Good" />
      <Button click={neutralFeedback} name="Neutral" />
      <Button click={badFeedback} name="Bad" />
      <br />
      <h1>Statistics</h1>
      <StatisticLine text="Good: " feedback={good}/>
      <StatisticLine text="Neutral: " feedback={neutral}/>
      <StatisticLine text="Bad: " feedback={bad}/>
      <StatisticLine text="All: " feedback={total}/>
      <StatisticLine text="Average: " feedback={average}/>
      <StatisticLine text="Positive Percentage (%):" feedback={percentage}/>
    </>
  )
}

export default App
