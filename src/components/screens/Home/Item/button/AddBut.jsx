import React from "react"
import { AiOutlinePlus } from "react-icons/ai"

/*function AddBut() {
	const [showAdd1, setShowAdd1] = useState(true)*/

	const AddBut = () => {
	return (
		<div>
			<div className="border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-300 flex items-center">
				<button>
					<AiOutlinePlus size={40} className="text-slate-400 mx-auto" />
				</button>
			</div>

		</div>
	)
}
	/*const addDabbl = () => {
		setShowAdd1(!showAdd1)
	}

	return (
		<div>
			{showAdd1 ? (
				<div class="flex items-stretch">
					<button
						onClick={addDabbl}
						className="border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-200 flex items-center"
					>
						<AiOutlinePlus size={40} className="text-slate-400 mx-auto" />
					</button>
				</div>
			) : (
				<div className="border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-300 flex items-center">
					<div>
						<input type="text" placeholder="Введите текст" />
					</div>
					<div>Сезон</div>
					<div>
						<input type="text" placeholder="Введите текст" />
					</div>
					<div>Эпизод</div>
					<div>
						<input type="text" placeholder="Введите текст" />
					</div>

					<button
						onClick={addDabbl}
						className="border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-300 flex items-center"
					>
						<AiOutlinePlus size={40} className="text-slate-400 mx-auto" />
					</button>
				</div>
			)}
		</div>
	)
}*/

/*function AddTodo ({todo, setTodo}) {

    const [value, setValue] = useState('')


    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return (
			<div>
				<Row>
					<Col className={s.addTodoForm}>
						<FormControl
							placeholder="Название сериала"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<Button variant="success" onClick={saveTodo} className={s.btn}>
							<FontAwesomeIcon icon={faPlus} />
						</Button>
					</Col>
				</Row>
			</div>
		)
}*/

export default AddBut
