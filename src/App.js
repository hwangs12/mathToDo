import React, { useState } from "react";
import Header from "./components/header";
import Body from "./components/body";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MathNavbar from "./components/mathnavbar";
import MathBookList from "./components/mathbooklist";
import EditBook from "./components/editbook";
import CreateBook from "./components/createbook";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./components/data";

function App() {
	const [repo, setRepo] = useState(Data[0]);
	const [index, setIndex] = useState(0);

	const handleClick = () => {
		if (Data[index + 1]) {
			setRepo(Data[index + 1]);
			setIndex((index) => index + 1);
		} else {
			setRepo(Data[0]);
			setIndex(0);
		}
	};
	return (
		<>
			<Router>
				<div className="container">
					<MathNavbar />
					<br />
					<Route path="/books" exact component={MathBookList} />
					<Route
						path="/books/:bookId/edit"
						exact
						component={EditBook}
					/>
					<Route path="/books/create" exact component={CreateBook} />
					<div className="header">
						<Header title={repo.title} handleClick={handleClick} />
					</div>
					<div className="mainbody">
						<Body statements={repo.statements} index={index} />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
