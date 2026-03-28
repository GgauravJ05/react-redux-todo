import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css"; 

export default function AddForm() {
    const [task, setTask] = useState("");
    
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        dispatch(addTodo(task));
        setTask("");
    };

    return (
        <form className="add-form" onSubmit={submitHandler}>
            <input 
                type="text" 
                className="task-input"
                placeholder="What needs to be done?"
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button type="submit" className="add-btn">
                Add Task
            </button>
        </form>
    );
}