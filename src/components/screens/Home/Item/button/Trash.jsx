import React from "react"
import { BsTrash } from "react-icons/bs"

const Trash = () => {
	return (
		<div className="border-2 rounded-l-xl w-16 h-16 flex items-center justify-center">
			<button /*</div>onClick={()=>trashTodo() }*/>
				<BsTrash size={40} className="text-slate-400 hover:text-red-600 mx-auto" />
			</button>
		</div>

		/*<div /*className="border-2 rounded-l-xl border-red-600 w-10 h-10 flex items-center mx-auto">
			<BsTrash size={29} className="text-red-300 mx-auto" />
		</div>*/
	)
}

export default Trash
