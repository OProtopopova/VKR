import React, { useState } from "react"

const SignUp = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")

	const handleUsernameChange = (event) => {
		setUsername(event.target.value)
	}

	const handlePasswordChange = (event) => {
		setPassword(event.target.value)
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		// handle registration logic here
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
					<div className="mb-3 ">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={handleEmailChange}
						/>
					</div>
					<div className="flex items-center justify-center mb-3 bg-slate-200 hover:bg-slate-300 hover:text-black rounded-xl text-lg">
						<button type="submit">Зарегистрироваться</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp
