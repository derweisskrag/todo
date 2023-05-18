import React, {useCallback} from "react";

const Form = (
	{
		inputText, 
		setInputText,
		todos,
		setTodos,
		status,
		setStatus,
		addTodo
	}) => {

	//props & functions

	const inputTextHandler = (event) => {
		setInputText(event.target.value);
	};

	const submitTodoHandler = useCallback((event) => {
		event.preventDefault();
		setTodos([...todos, {
			text: inputText,
			completed: false,
			id: Math.random()*1000,
		}]);
		setInputText("");
	}, [inputText, todos, setTodos]);

	const statusHandler = (event) => {
		setStatus(event.target.value);
	};

	 const saveToLocalStorage = (items) => {
    	localStorage.setItem("todos", JSON.stringify(items));
  	};

  	const getFromLocalStorage = () => {
	    if (localStorage.getItem("todos") === null) {
	     	 localStorage.setItem("todos", JSON.stringify([]));
	    } else {
		      let todoLocal = JSON.parse(localStorage.getItem("todos"));
		      setTodos(todoLocal);
	    }
  	};

	return (
		<div>
			<form> 
				<div className="input-wrap">
					<input
					type = "text"
					placeholder = "a thing"
					className = "todo-input"
					value = {inputText}
					onChange = {inputTextHandler}
					/>
					<button 
						className = "todo-btn"
						type = "submit"
						onClick = {submitTodoHandler}
					> 
						<i className = "icon-add-btn"></i> 
					</button>
				</div>
				<div className = "selection">
					<select 
						onChange={statusHandler}
						name="todos" 
						className="filter-todo"
					>
						<option value = "all"> all </option>
						<option value = "completed"> completed </option>
						<option value = "uncompleted"> uncompleted </option>
					</select>
					 <button onClick={() => saveToLocalStorage(todos)}>
          				Save To Local Storage
        			</button>
        			<button onClick={() => getFromLocalStorage()}>
        			    Get From Local Storage
      				</button>
				</div>
			</form>
		</div>
	);
};

export default Form;