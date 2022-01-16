import React, { useContext, useState } from "react";
import "./Inputbar.css";
import { FiPlus } from "react-icons/fi";
import InputComponent from "../Input/InputComponent";
import { DataContext } from "../../Context/Context";

const Inputbar = () => {
  const { Tasks, AddTask } = useContext(DataContext);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <div className="inputSection">
        <InputComponent
          icon="FiAlignLeft"
          value={newTask}
          OnChangeText={(e) => {
            if (e.target.value !== null) {
              setNewTask(e.target.value);
            }
          }}
        />
        <button
          title="Add"
          className="add-btn"
          onClick={() => {
            if (newTask !== "") {
              AddTask({
                TaskName: newTask,
                TaskId: Tasks.length + 1,
                TaskStatus: "Task To Do",
              });
              setNewTask("");
            }
          }}
        >
          <FiPlus size="26" />
        </button>
      </div>
    </>
  );
};

export default Inputbar;
