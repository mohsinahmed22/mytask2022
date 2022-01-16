import React from "react";
import "./ItemList.css";
import { FiX, FiCheckSquare, FiTrash2 } from "react-icons/fi";

const ItemList = ({
  TaskStatus,
  TaskName,
  TaskId,
  deleteTask,
  completeTask,
}) => {
  return (
    <div className="ListItem">
      {TaskStatus === "Task To Do" && (
        <div className="deleteTask">
          <FiX size="20" onClick={deleteTask} />
        </div>
      )}

      <div className="TaskInfo" onClick={completeTask}>
        <h4>{TaskName}</h4>

        {TaskStatus === "deleted" && (
          <div className="DeletedTask">
            <FiTrash2 size="20" title="Deleted Task" />
          </div>
        )}
        {TaskStatus === "completed" && (
          <div className="CompletedTask">
            <FiCheckSquare size="20" title="Task Completed" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
