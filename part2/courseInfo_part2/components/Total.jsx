

const Total = (props) => {

    const parts = props.parts;

    const total = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
    return (
      <>
        <h4>Total exercises: {total}</h4>
      </>
    )
};

export default Total;