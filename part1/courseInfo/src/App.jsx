//header, content, total
const Header = (props) => {
  return (
  <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.name}, {props.exercise}</p>
    </>
  )
}

const Content = () => {
  return (
    <>
      <Part name="Fundamentals of React" exercise={10}/>
      <Part name="Using props to pass data" exercise={7}/>
      <Part name="State of a component" exercise={14}/>
    </>
  )
}

const Total = () => {
  const exercise1 = 10;
  const exercise2 = 7;
  const exercise3 = 14;

  return (
    <p>{exercise1 + exercise2 + exercise3}</p>
  )
}

const App = () => {

  return (
    <>
      <Header course="Half Stack Application Development"/>
      <Content />
      <br />
      <h4>Total Exercises</h4>
      <Total />
    </>
  )
}

export default App
