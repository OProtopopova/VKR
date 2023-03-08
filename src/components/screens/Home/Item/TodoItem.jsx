import React from "react"
import Check from "./button/Check"
import Edit from "./button/Edit"
import Trash from "./button/Trash"
import Setting from "./button/Setting"

const TodoItem = ({ todo }) => {
	return (
		<div className="flex items-center justify-between mb-7 rounded-3xl bg-slate-200 pl-4 space-x-4">
			<div className="text-lg font-semibold text-slate-700">{todo.title}</div>
			<div className="flex items-center justify-center">
				<Trash />
				<Edit />
				<Setting /*onClick={setting}*/ />
				<Check
					onClick={() => (changeTodo = { todo, _id })}
					isComplited={todo.isComplited}
				/>
			</div>
		</div>
	)
}

export default TodoItem
