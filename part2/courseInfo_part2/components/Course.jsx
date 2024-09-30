import  Header  from "../components/Header";
import  FirstContent  from "../components/FirstContent";
import  SecondContent  from "../components/SecondContent";
import  Total  from "../components/Total";

const Course = ({ course }) => {

    return (
      <div>
          <Header course={course}/>
          <FirstContent course={course}/>
          <Total parts={course[0].parts}/>
          <SecondContent course={course}/>
          <Total parts={course[1].parts}/>
      </div>
    )
}

export default Course