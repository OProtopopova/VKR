import React from "react"
import AddBut from "./button/AddBut"
import { AiOutlinePlus } from "react-icons/ai"

/*const AddTodo = () => {
	return (
		<div className="flex items-center justify-between mb-7 rounded-3xl bg-slate-200 pl-4 space-x-4">
			<AddBut />
		</div>
	)
}*/
const AddTodo = () => {
	return (
		<div className="flex items-center justify-between mb-7 rounded-3xl bg-slate-200 pl-4 space-x-4">
			<div className="grid grid-cols-3 justify-start">
				<div>
					<input type="text" placeholder="Введите название" />
				</div>
				<div class="grid grid-cols-4">
					Сезон
					<input type="text" placeholder="Сезон" />
					Эпизод
					<input type="text" placeholder="Эпизод" />
				</div>
			</div>
			<div className="mx-8">
				<div className=" border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-300 flex items-center ">
					<button className="mx-8">
						<AiOutlinePlus size={40} className="text-slate-400 mx-auto" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddTodo
