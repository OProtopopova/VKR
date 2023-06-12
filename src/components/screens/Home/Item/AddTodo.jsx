import React, {useState} from "react"
import AddBut from "./button/AddBut"
import { AiOutlinePlus } from "react-icons/ai"
import axios from "axios";
import TodoItem from "./TodoItem";

const addTodoUrl = "http://localhost:8080/series/add";
const getAllSeriesUrl = "http://localhost:8080/series/getAll";


const AddTodo = (props) => {

	const [serialName, setSerialName] = useState("")
	const [season, setSeason] = useState("")
	const [episode, setEpisode] = useState("")
	const [serialList, setSerialList] = useState([])
	const [state, setState] = useState(0)


	if (state < 5) {
		try {
			axios({
				url: getAllSeriesUrl,
				headers: {
					"Content-Type": "Application/json",
				},
				method: "GET",
				params: { userLogin: props.userLogin },
			}).then((response) => {
				setSerialList(response.data.serialList);
				setState(state + 1);
			})
		} catch (e) {
			console.log(e)
		}
	}




	const addTodo = async () => {
		try {
			await axios({
				url: addTodoUrl,
				headers: {
					"Content-Type": "Application/json",
				},
				method: "POST",
				data: {
					title: serialName,
					episode: episode,
					season: season,
					login: props.userLogin,
				},
			}).then((response) => {
				console.log(response.data)
				props.setUserLogin(response.data.login);
				props.setUserToken(response.data.token)
			})
		} catch (e) {
			console.log(e)
		}
		try {
			axios({
				url: getAllSeriesUrl,
				headers: {
					"Content-Type": "Application/json",
				},
				method: "GET",
				params: { userLogin: props.userLogin },
			}).then((response) => {
				setSerialList(response.data.serialList);
			})
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div>
			<div>
				{serialList.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				))}
			</div>
			<div className="flex items-center justify-between mb-7 rounded-3xl bg-slate-200 pl-4 space-x-4">
				<div className="grid grid-cols-3 justify-start">
					<div>
						<input onChange={e => {
							setSerialName(e.target.value)
						}} type="text" placeholder="Введите название"/>
					</div>
					<div className="grid grid-cols-4">
						Сезон
						<input onChange={e => {
							setSeason(e.target.value)
						}} type="text" placeholder="Сезон"/>
						Эпизод
						<input onChange={e => {
							setEpisode(e.target.value)
						}} type="text" placeholder="Эпизод"/>
					</div>
				</div>
				<div className="mx-8">
					<div
						className=" border-2 justify-center rounded-full w-12 h-12 m-1.5 hover:bg-slate-300 hover:border-slate-300 flex items-center ">
						<button onClick={() => addTodo()} className="mx-8">
							<AiOutlinePlus size={40} className="text-slate-400 mx-auto"/>
						</button>
					</div>
				</div>

			</div>
		</div>


	)
}

export default AddTodo
