import React from "react"
import Edit from "./button/Edit"
import Trash from "./button/Trash"
import Setting from "./button/Setting"

const TodoItem = ({ todo, changeTvShowState }) => {
	return (
		<div className="flex items-center justify-between mb-7 rounded-3xl bg-slate-200 pl-4 space-x-4">
			<div
				className={
					todo.isCompleted
						? "line-through text-lg font-semibold text-slate-700"
						: "text-lg font-semibold text-slate-700"
				}
			>
				{todo.title}
			</div>
			<div className="flex items-center justify-center">
				<Trash />
				<Edit />
				<Setting /*onClick={setting}*/ />

				<div
					onClick={() => changeTvShowState("EPISODE_WATCHED", todo._id)}
					className={
						"border-2 rounded-r-3xl bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 h-16 flex items-center justify-center"
					}
				>
					<button className="font-semibold text-xl  text-slate-100 m-3">
						Просмотрено
					</button>
				</div>
			
			</div>
		</div>
	)
}

export default TodoItem
