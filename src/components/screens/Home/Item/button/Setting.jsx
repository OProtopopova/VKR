import React from "react"
import { BsThreeDotsVertical } from "react-icons/bs"

const Setting = () => {
	return (
		<div className="border-l-xl w-12 h-16 flex items-center justify-center hover:border-slate-300 hover:bg-slate-300">
			<button>
				<BsThreeDotsVertical size={40} className="text-slate-400 mx-auto" />
			</button>
		</div>
	)
}

export default Setting
