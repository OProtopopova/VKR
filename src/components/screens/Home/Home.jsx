import React, { useState } from "react"
import TodoItem from "./Item/TodoItem"
import AddTodo from "./Item/AddTodo"

const data = [
	{
		_id: "zcv",
		title: "сделать всплывающее меню",
		isCompleted: true,
		season: 1,
		episode: 2,
	},
	{
		_id: "c",
		title: "добавить место для сезона и серий под названием",
		isCompleted: false,
		season: 1,
		episode: 2,
	},
	{
		_id: "m",
		title: "третий не придумала но надо чтоб все работало",
		isCompleted: false,
		season: 1,
		episode: 2,
	},
]

const Home = () => {
	const [check, setCheck] = useState(data)

	function chngeTvShows(type, value) {}

	function changeTvShowState(type, id, value) {
		if (type === "EPISODE_WATCHED") {
			const copy = [...check]
			const tvShow = copy.find((t) => t._id === id)
			tvShow.episode++
			setCheck(copy)
		}
		if (type === "DELETE") {
		}
		if (type === "EDIT") {
		}
	}

	return (
		<div className="w-3/5 mx-auto">
			<h1 className="text-3xl font-bold text-right mb-10">Header</h1>
			{data.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTvShowState={changeTvShowState}
				/>
			))}
			<AddTodo />
		</div>
	)
}

export default Home
