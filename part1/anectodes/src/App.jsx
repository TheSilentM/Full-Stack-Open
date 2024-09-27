import { useState } from 'react'

function App() {
  const anectodes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState("");
  const [vote, setVote] = useState(Array(anectodes.length).fill(0));


  const generateRandom = () => {
    const random = Math.floor(Math.random() * anectodes.length);
    setSelected(random);
  }

  const voteAnectode = () => {
    const saveVote = [...vote];
    saveVote[selected] += 1;
    setVote(saveVote);
    console.log(saveVote[selected])
  }

  return (
    <>
      <h1>{anectodes[selected]}</h1>
      <h4>Has {vote[selected]} votes</h4>
      <button onClick={generateRandom}>generate</button>
      <button onClick={voteAnectode}>vote</button>
    </>
  )
}

export default App
