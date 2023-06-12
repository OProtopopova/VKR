import axios from "axios"
import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const SignIn = (props) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleUsernameChange = (event) => {
		setUsername(event.target.value)
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// handle registration logic here
	}

	const signInUrl = "http://localhost:8080/user/login"

	const signIn = async () => {
		try {
			await axios({
				url: signInUrl,
				headers: {
					"Content-Type": "Application/json",
				},
				method: "POST",
				data: {
					login: username,
					password: password,
				},
			}).then((response) => {
				console.log(response.data)
				props.setUserLogin(response.data.login);
				props.setUserToken(response.data.token)
			})
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className=" rounded-3xl bg-slate-200 mx-96">
			<div className="flex items-center justify-center">
				<h1 className="text-xl font-bold text-center mb-4">Здравствуйте!</h1>
			</div>
			<div className="flex items-center justify-center">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="username">Логин:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={handleUsernameChange}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password">Пароль:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>

					<div className="flex items-center justify-center mb-3 mx-10 bg-slate-200 hover:bg-slate-300 hover:text-black rounded-xl text-lg">
						<Link to="/">
							<button onClick={() => signIn()}>Войти</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignIn
