import React, { useState } from "react"
import TodoItem from "./Item/TodoItem"
import AddTodo from "./Item/AddTodo"

const data = [
	{
		_id: "zcv",
		title: "поменять местами цвета на кнопках",
		isCompleted: false,
	},
	{
		_id: "c",
		title: "добавить место для сезона и серий под названием",
		isCompleted: false,
	},
	{
		_id: "m",
		title: "третий не придумала но надо чтоб все работало",
		isCompleted: false,
	},
]

const Home = () => {
	const [check, setCheck] = useState(data)

	const changeTodo = (id) => {
		const copy = [...check]
		const carrent = copy.find((t) => t._id === id)
		carrent.isCompleted = !carrent.isCompleted
		setCheck(copy)
	}

	return (
		<div className="w-3/5 mx-auto">
			<h1 className="text-3xl font-bold text-right mb-10">Header</h1>
			{data.map((todo) => (
				<TodoItem key={todo._id} todo={todo} changeTodo={changeTodo}/>
			))}
			<AddTodo />
		</div>
	)
}

export default Home
