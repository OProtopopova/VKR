import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Home from "./components/screens/Home/Home"
import Layout from "./components/layout/Layout"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Layout>
				<Home />
			</Layout>
		</Router>
	</React.StrictMode>,

	document.getElementById("root")
)
