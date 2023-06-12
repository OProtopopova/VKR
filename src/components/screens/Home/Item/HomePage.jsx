import React, { useState } from "react"
import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"

const HomePage = (props) => {

	return (
		<div>
			<h2 className="text-2xl font-bold text-center mb-10">
				Добро пожаловать!
			</h2>
			{props.seriesList.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
				/>
			))}
			<AddTodo />
		</div>
	)
}

export default HomePage
