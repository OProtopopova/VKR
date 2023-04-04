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
	const [store, setState] = useState(data)

	/*function changeTvShows(type, value) {}*/

	function changeTvShowState(type, id, value) {
		if (type === "EPISODE_WATCHED") {
			const copy = [...store]
			const tvShow = copy.find((t) => t._id === id)
			tvShow.episode++
			setState(copy)
		}
		if (type === "DELETE") {
			const copy = [...store]
			for (var i = copy.length - 1; i >= 0; --i) {
				if (copy[i]._id === id) {
					copy.splice(i, 1);
				}
			}
			setState(copy)
		}
		if (type === "EDIT") {
			const copy = [...store]
			const tvShow = copy.find((t) => t._id === id)
			tvShow.title = value.title
			setState(copy)
		}
	}

	return (
		<div className="w-3/5 mx-auto">
			<h1 className="text-3xl font-bold text-right mb-10">Header</h1>
			{store.map((todo) => (
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
