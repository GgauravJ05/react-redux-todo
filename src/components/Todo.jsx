import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
import "./Todo.css"; 

export default function Todo() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <div className="todo-container">
            <header className="app-header">
                <h1>Task Master</h1>
                <p>Stay organized, focused, and achieve more.</p>
            </header>
            
            <AddForm />

            <div className="todo-list">
                {todos.length === 0 ? (
                    <div className="empty-state">
                        <p>No tasks remaining. You're all caught up!</p>
                    </div>
                ) : (
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id} className={`todo-item ${todo.isDone ? 'completed' : ''}`}>
                                <div className="todo-content" onClick={() => dispatch(marksAsDone(todo.id))}>
                                    <div className={`checkbox ${todo.isDone ? 'checked' : ''}`}>
                                        {todo.isDone && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        )}
                                    </div>
                                    <span className="task-text">{todo.task}</span>
                                </div>
                                <button 
                                    className="delete-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        dispatch(deleteTodo(todo.id));
                                    }}
                                    aria-label="Delete task"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            <div className="stats">
                <p>
                    {todos.filter(t => t.isDone).length} completed • {todos.filter(t => !t.isDone).length} remaining
                </p>
            </div>
        </div>
    );
}