import React from "react";
import "./App.css";
import "./Assests/Css/responsive.css";

import { DataProvider } from "./Context/Context";

import Inputbar from "./Components/Inputbar/Inputbar";
import TaskList from "./Components/List/List";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <div className="container-wrapper">
          <h1>My Task List</h1>
          <div className="container">
            <Inputbar />
          </div>
          <div className="taskList">
            <TaskList />
          </div>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
