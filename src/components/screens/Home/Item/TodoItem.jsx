import React from "react"
import { BsTrash } from "react-icons/bs"
import { BiEditAlt } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
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
				{todo.title + todo.episode}
			</div>

			<div className="flex items-center justify-center">
				<div className="border-2 rounded-l-xl w-16 h-16 flex items-center justify-center">
					<button /*</div>onClick={()=>trashTodo() }*/>
						<BsTrash
							size={40}
							className="text-slate-400 hover:text-red-600 mx-auto"
						/>
					</button>
				</div>

				<div className="border-2 rounded-none w-16 h-16 flex items-center justify-center">
					<button>
						<BiEditAlt
							size={40}
							className=" text-slate-400 hover:text-slate-50 mx-auto"
						/>
					</button>
				</div>

				<div className="border-l-xl w-12 h-16 flex items-center justify-center hover:border-slate-300 hover:bg-slate-300">
					<button>
						<BsThreeDotsVertical size={40} className="text-slate-400 mx-auto" />
					</button>
				</div>

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
