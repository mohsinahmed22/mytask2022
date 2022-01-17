import React, { useContext, useEffect, useState } from "react";
import "./List.css";

import ItemList from "../Item/ItemList";
import { DataContext } from "../../Context/Context";

const List = () => {
  const { Tasks, UpdateStatus } = useContext(DataContext);
  const [View, setView] = useState("Task To Do");

  useEffect(() => {
    setView(View);
  }, []);

  return (
    <>
      <div className="viewMode">
        <span
          className={View === "Task To Do" ? "active" : ""}
          onClick={() => setView("Task To Do")}
        >
          UnDone
        </span>
        <span
          className={View === "completed" ? "active" : ""}
          onClick={() => setView("completed")}
        >
          Completed
        </span>
        <span
          className={View === "deleted" ? "active" : ""}
          onClick={() => {
            setView("deleted");
          }}
        >
          Deleted
        </span>
      </div>
      <div className="ListItems">
        {Tasks.filter((item) => item.TaskStatus === View).map(
          (filterItem, index) => {
            return (
              <ItemList
                key={index}
                TaskName={filterItem.TaskName}
                TaskId={filterItem.TaskId}
                TaskStatus={filterItem.TaskStatus}
                deleteTask={() => UpdateStatus("deleted", filterItem.TaskId)}
                completeTask={() =>
                  UpdateStatus("completed", filterItem.TaskId)
                }
              />
            );
          }
        )}
        {/* {Tasks.map((task, index) => (
          <ItemList
            key={index}
            TaskName={task.TaskName}
            TaskId={task.TaskId}
            TaskStatus={task.TaskStatus}
            deleteTask={() => UpdateStatus("deleted", index)}
            completeTask={() => UpdateStatus("completed", index)}
          />
        ))} */}
      </div>
    </>
  );
};
export default List;
