import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

const AddBut = () => {
	return (
		<div className="border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-300 flex items-center">
			<button>
				<AiOutlinePlus size={40} className="text-slate-400 mx-auto" />
			</button>
		</div>
	)
}



export default AddBut
