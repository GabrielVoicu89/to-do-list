import { useState } from "react";
import "./App.css";
import Task from "./composants/Task";
function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    // stocking the value of input in a state variable
    setNewTask(e.target.value);
  };
  function addTask() {
    console.log("newtask", newTask);
    // push newtask in tasklist
    setTaskList([...taskList, newTask]);
    console.log("tasklist", taskList);
  }
  const renderMyList = () => {
    return taskList.map((item) => {
      return <Task content={item} />;
    });
  };
  return (
    <>
      <h1>To Do List</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={addTask}>Add</button>
      <ul>{renderMyList()}</ul>
    </>
  );
}
export default App;
