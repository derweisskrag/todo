import React from "react";
import Todo from "./Todo.js";

const TodoList = ({todos, setTodos, filteredTodos}) => {
	//props
	return (
		<div className="todo-list-container">
				<ul className="todo-list">
					{
						filteredTodos.map((todo) => (
							<Todo 
								setTodos={setTodos}
								todos={todos}
								todo={todo}
								text={todo.text}
								key={todo.id}
							/>
						))
					}
				</ul>
		</div>
	);	
};

export default TodoList;