import React, { useState } from "react";

const TodoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div className="container mt-5 w-50">
			<h1 className="text-center display-2 opacity-25">todos</h1>
			<div className="todo-container shadow">
				<ul className="list-group">
					<li className="list-group-item p-0">
						<input
							type="text"
							className="form-control border-0 p-3 fs-4"
							placeholder="¿Qué falta por hacer?"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyDown={(e) => {
								if (e.key === "Enter" && inputValue.trim() !== "") {
									setTodos([...todos, inputValue]);
									setInputValue("");
								}
							}}
						/>
					</li>
					{todos.length === 0 ? (
						<li className="list-group-item text-muted p-3">
							No hay tareas, añadir tareas
						</li>
					) : (
						todos.map((t, index) => (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center p-3 task-item">
								{t}
								<i 
									className="fas fa-times text-danger delete-icon" 
									onClick={() => setTodos(todos.filter((_, i) => i !== index))}
								></i>
							</li>
						))
					)}
					<li className="list-group-item text-secondary small-text p-2 opacity-50">
						{todos.length} item{todos.length !== 1 ? "s" : ""} left
					</li>
				</ul>
			</div>
            <div className="bottom-page-1 shadow"></div>
            <div className="bottom-page-2 shadow"></div>
		</div>
	);
};

export default TodoList;