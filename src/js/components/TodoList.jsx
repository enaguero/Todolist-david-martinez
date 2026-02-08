import React, { useState } from "react";

/**
 * TodoList - Aplicación de lista de tareas
 * 
 * Características:
 * - Añadir tareas presionando Enter
 * - Eliminar tareas con click en el icono X
 * - Contador de tareas pendientes
 * - Validación de input vacío
 * - Mensaje cuando no hay tareas
 * 
 * @returns {JSX.Element} Componente de lista de tareas
 */
const TodoList = () => {
	// Estado del input controlado
	const [inputValue, setInputValue] = useState("");
	
	// Lista de tareas (array de objetos con id y text)
	const [todos, setTodos] = useState([]);

	/**
	 * Añade una nueva tarea cuando se presiona Enter
	 * Valida que el input no esté vacío (trim)
	 * Crea un objeto con ID único para cada tarea
	 * @param {KeyboardEvent} e - Evento del teclado
	 */
	const handleAddTodo = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			// Crear objeto con ID único (timestamp) y texto de la tarea
			const newTodo = {
				id: Date.now(), // ID único basado en timestamp
				text: inputValue
			};
			setTodos([...todos, newTodo]);
			setInputValue("");
		}
	};

	/**
	 * Elimina una tarea por su ID único
	 * @param {number} idToRemove - ID de la tarea a eliminar
	 */
	const handleDeleteTodo = (idToRemove) => {
		setTodos(todos.filter(todo => todo.id !== idToRemove));
	};

	return (
		<div className="container mt-5 w-50">
			{/* Título principal */}
			<h1 className="text-center display-2 opacity-25">todos</h1>
			
			{/* Contenedor principal de la lista */}
			<div className="todo-container shadow">
				<ul className="list-group">
					{/* Input para añadir nuevas tareas */}
					<li className="list-group-item p-0">
						<input
							type="text"
							className="form-control border-0 p-3 fs-4"
							placeholder="¿Qué falta por hacer?"
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyDown={handleAddTodo}
						/>
					</li>
					
					{/* Renderizado condicional: mensaje vacío o lista de tareas */}
					{todos.length === 0 ? (
						<li className="list-group-item text-muted p-3">
							No hay tareas, añadir tareas
						</li>
					) : (
						todos.map((todo) => (
							<li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center p-3 task-item">
								{todo.text}
								{/* Icono de eliminar (visible en hover) */}
								<i 
									className="fas fa-times text-danger delete-icon" 
									onClick={() => handleDeleteTodo(todo.id)}
								></i>
							</li>
						))
					)}
					
					{/* Contador de tareas pendientes */}
					<li className="list-group-item text-secondary small-text p-2 opacity-50">
						{todos.length} item{todos.length !== 1 ? "s" : ""} left
					</li>
				</ul>
			</div>
			
			{/* Efecto visual de páginas apiladas */}
            <div className="bottom-page-1 shadow"></div>
            <div className="bottom-page-2 shadow"></div>
		</div>
	);
};

export default TodoList;
