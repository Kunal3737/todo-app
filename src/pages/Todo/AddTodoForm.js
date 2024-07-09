import React, { useState } from "react";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const AddTodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task, image);
      setTask("");
      setImage(null);
    }
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

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div>
        <Input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div style={{ display: "flex", marginTop: "6px" }}>
          <Input type="file" onChange={handleImageChange} accept="image/*" />
          <Button type="submit" style={{ width: "200px", marginLeft: "6px" }}>
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
