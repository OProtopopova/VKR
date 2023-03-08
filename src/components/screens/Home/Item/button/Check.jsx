import React from "react"

const Check = (isComplited) => {
	return (
		<div
			className={
				"border-2 rounded-r-3xl bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 h-16 flex items-center justify-center"
			}
		>
			<button className="font-semibold text-xl  text-slate-100 m-3">
				Просмотрено
			</button>
		</div>
	)
}

export default Check
