function Task(props) {
  return (
    <li key={props.index}>
      {props.content} <button onClick={props.click}>{props.statuss}</button>
    </li>
  );
}
export default Task;
