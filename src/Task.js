export const Task = (props) => {
return (
    <div className="task">
      <h1>{props.taskname}</h1>
      <button> complete </button>
      <button onClick={() => props.deleteTask(props.id)}> x </button>
      </div>
  );
};