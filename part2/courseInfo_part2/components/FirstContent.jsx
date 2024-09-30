import  Part  from "../components/Part";

const FirstContent = ({ course }) => {
    return (
      <>
        <Part parts={course[0].parts}/>
      </>
    );
};

export default FirstContent