import React from "react";

const Todo = ({text, id, status, todo, todos, setTodos}) => {
	const completedHandler = (event) => {
		setTodos(todos.map((item) => 
			item.id === todo.id ? {...item, completed: !item.completed} 
				: item
		))
	};

	const deleteHandler = (event) => {
		setTodos(todos.filter(el => el.id !== todo.id));
	};

	return (
		<div className = "todo-container">
			<div className = "todo">
				<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
			</div>
			<button 
				className = "btn-completed"
				onClick = {completedHandler}
			>
				<i className = "icon-completed-btn"></i>
			</button>
			<button 
				className = "btn-trash"
				onClick = {deleteHandler}
			>
				<i className = "icon-trash-btn"></i>
			</button>
		</div>
	);
};

export default Todo;

/*



*/