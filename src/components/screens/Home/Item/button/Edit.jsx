import React from "react"
import { BiEditAlt } from "react-icons/bi"

const Edit = () => {
	return (
		<div className="border-2 rounded-none w-16 h-16 flex items-center justify-center">
			<button>
				<BiEditAlt size={40} className=" text-slate-400 hover:text-slate-50 mx-auto" />
			</button>
		</div>

		/*<div className="border-2 rounded-none border-slate-900 w-10 h-10 flex items-center">
			<FaRegEdit size={30} className="text-slate-400 mx-2" />
		</div>*/
	)
}

export default Edit
