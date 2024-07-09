import React, { useState, useEffect, useMemo } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import TabButton from "../../components/UI/TabButton";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask, newImage) => {
    setTasks([
      ...tasks,
      { id: Date.now(), task: newTask, image: newImage, completed: false },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newTask, newImage) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, task: newTask, image: newImage } : task
      )
    );
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "all") return true;
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl mb-4">Your To-Do List</h2>

      <AddTodoForm addTask={addTask} />
      {tasks.length > 0 && (
        <div className="flex mb-4">
          <TabButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </TabButton>
          <TabButton
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </TabButton>
          <TabButton
            active={filter === "incomplete"}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </TabButton>
        </div>
      )}
      <ul className="mt-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
              editTask={editTask}
            />
          ))
        ) : (
          <div>No Data!</div>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
