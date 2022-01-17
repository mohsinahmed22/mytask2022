import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const TaskArr = [];
  useEffect(() => {}, []);
  const [Tasks, setTask] = useState(TaskArr);
  const AddTask = (newTask) => {
    setTask([...Tasks, newTask]);
    // console.log(Task);
  };

  const UpdateStatus = (Status, i) => {
    switch (Status) {
      case "deleted":
        Tasks[i - 1].TaskStatus = Status;
        console.log(Tasks[i]);
        break;
      case "completed":
        Tasks[i - 1].TaskStatus = Status;
        console.log(Tasks[i]);
        break;
      default:
        console.log("Task".i);
        break;
    }
  };

  return (
    <DataContext.Provider value={{ Tasks, AddTask, UpdateStatus }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
