import React, { useState, useRef, useEffect } from "react";

const TodoItem = ({ task, deleteTask, toggleTaskStatus, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);
  const [image, setImage] = useState(task.image || null);
  const inputRef = useRef(null);

  const handleEditChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    editTask(task.id, editedTask, image);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setEditedTask(task.task);
    setImage(task.image || null);
    setIsEditing(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className="flex items-center justify-between py-2 border-b">
      <div>
        <input
          type="checkbox"
          className="mr-2 leading-tight"
          checked={task.completed}
          onChange={() => toggleTaskStatus(task.id)}
        />
        {isEditing ? (
          <form onSubmit={handleEditSave} className="inline">
            <input
              type="text"
              className="font-medium"
              value={editedTask}
              onChange={handleEditChange}
              ref={inputRef}
            />
            <input
              type="file"
              className="ml-2"
              onChange={handleImageChange}
              accept="image/*"
            />
          </form>
        ) : (
          <>
            <span
              className={`font-medium ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.task}
            </span>
            {task.image && (
              <img src={task.image} alt="task" className="w-10 h-10 ml-2" />
            )}
          </>
        )}
      </div>
      <div>
        {isEditing ? (
          <>
            <button
              className="text-sm text-green-600 hover:text-green-900 mr-2"
              onClick={handleEditSave}
            >
              Save
            </button>
            <button
              className="text-sm text-gray-600 hover:text-gray-900"
              onClick={handleEditCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="text-sm text-blue-600 hover:text-blue-900 mr-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="text-sm text-red-600 hover:text-red-900"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
