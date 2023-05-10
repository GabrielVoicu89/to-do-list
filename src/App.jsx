import { useState } from "react";
import "./App.css";
import Task from "./composants/Task";
function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleChange = (e) => {
    // stocking the value of input in a state variable
    setNewTask({ statuss: "to do", task: e.target.value });
    return console.log("newtask", newTask);
  };
  function addTask() {
    console.log("newtask", newTask);

    // push newtask in tasklist
    setTaskList([...taskList, newTask]);
    console.log("tasklist", taskList);
  }

  const clickButton = (index) => {
    console.log("test click button");
    console.log(taskList);
  };

  const renderMyList = () => {
    return taskList.map((item, index) => {
      return (
        <Task
          key={index}
          content={item.task}
          click={clickButton}
          statuss={item.statuss}
        />
      );
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
