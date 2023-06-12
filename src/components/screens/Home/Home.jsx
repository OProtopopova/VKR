import React, { useState } from "react"
import { Link, Routes, Route } from "react-router-dom"
import SignIn from "./Item/SignIn"
import SignUp from "./Item/SignUp"
import HomePage from "./Item/HomePage"
import { AiOutlineHome } from "react-icons/ai"
import axios from "axios"

const Home = () => {
	const [userLogin, setUserLogin] = useState("")
	const [token, setUserToken] = useState("")
	const [seriesList, setSeriesList] = useState([])

	if ((userLogin !== "") & (seriesList.length === 0)) {
		try {
			axios({
				url: getAllSeriesUrl,
				headers: {
					"Content-Type": "Application/json",
				},
				method: "GET",
				params: { userLogin: userLogin },
			}).then((response) => {
				setSeriesList(response.data.serialList)
			})
		} catch (e) {
			console.log(e)
		}
	}

	console.log(seriesList + "GGGGGGGGGGG")

	return (
		<div className="w-3/5 mx-auto">
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-bold text-right mb-10 text-slate-400 hover:text-black">
					<Link to="/">
						<button className="w-16 h-16 flex items-center justify-center">
							<AiOutlineHome
								size={40}
								className="text-slate-400 hover:text-black mx-auto"
							/>
						</button>
					</Link>
				</h1>
				<div>
					<h1 className="text-xl font-bold text-right mb-3 text-slate-400 hover:text-black">
						<Link to="/signIn">
							<button>Войти</button>
						</Link>
					</h1>
					<h1 className="text-xl font-bold text-right mb-10 text-slate-400 hover:text-black">
						<Link to="/registration">
							<button>Зарегистрироваться</button>
						</Link>
					</h1>
				</div>
			</div>
			<Routes>
				<Route
					path="/"
					exact="true"
					element={<HomePage seriesList={seriesList} />}
				/>
				<Route
					path="/signIn"
					exact="true"
					element={
						<SignIn
							userLogin={" "}
							userToken={" "}
							setUserLogin={setUserLogin}
							setUserToken={setUserToken}
						/>
					}
				/>
				<Route path="/registration" exact="true" element={<SignUp />} />
			</Routes>
		</div>
	)
}

const getAllSeriesUrl = "http://localhost:8080/series/getAll"

export default Home
