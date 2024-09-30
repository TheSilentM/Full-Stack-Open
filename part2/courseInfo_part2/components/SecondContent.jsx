import  Part  from "../components/Part";

const SecondContent = ({ course }) => {
    return (
      <>
        <h1>{course[1].name}</h1>
        <Part parts={course[1].parts}/>
      </>
    );
};

export default SecondContent