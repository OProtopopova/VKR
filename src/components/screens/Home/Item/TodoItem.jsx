import React, { useState } from "react"
import { BsTrash } from "react-icons/bs"
import { BiEditAlt } from "react-icons/bi"

const TodoItem = (props) => {
	const [itemState, setState] = useState({ editOpened: false, newTitle: "" })

	function toggleEdit() {
		setState((prev) => {
			return { ...prev, editOpened: !prev.editOpened }
		})
	}

	function handleChangeEditTitleInput(event) {
		setState((prev) => {
			return { ...prev, newTitle: event.target.value }
		})
	}

	function editSave() {
		var copy = props.todo
		copy = { ...copy, title: itemState.newTitle }
		props.changeTvShowState("EDIT", props.todo.id, copy)
		toggleEdit()
	}

	console.log(props.todo)

	return (
		<div>
			
			<div style={{ display: itemState.editOpened ? "block" : "none" }}>
				<input
					value={itemState.newTitle}
					onChange={(event) => handleChangeEditTitleInput(event)}
				></input>
				<button onClick={() => editSave()}>Save</button>
			</div>
			<div className="flex items-center justify-between mb-7 rounded-3xl bg-slate-200 pl-4 space-x-4">
				<div class="grid-cols-1 col-span-2">
					<div
						className={
							props.todo.isCompleted
								? "line-through text-lg font-semibold text-slate-700"
								: "text-lg font-semibold text-slate-700"
						}
					>
						{props.todo.title}
					</div>
					<div>
						<div>
							S{props.todo.season} E{props.todo.episode}
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<div className="border-2 rounded-l-xl w-16 h-16 flex items-center justify-center">
						<button
							onClick={() => props.changeTvShowState("DELETE", props.todo._id)}
						>
							<BsTrash
								size={40}
								className="text-slate-400 hover:text-red-600 mx-auto"
							/>
						</button>
					</div>

					<div className="border-2 rounded-none w-16 h-16 flex items-center justify-center">
						<button onClick={() => toggleEdit()}>
							<BiEditAlt
								size={40}
								className=" text-slate-400 hover:text-slate-50 mx-auto"
							/>
						</button>
					</div>

					<div
						onClick={() =>
							props.changeTvShowState("EPISODE_WATCHED", props.todo._id)
						}
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
		</div>
	)
}

export default TodoItem
