import React from "react";
import { Link } from "react-router-dom";

const MathNavbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link to="/books" className="navbar-brand">
				MathRepo
			</Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/books" className="nav-link">
							Math Books
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/books/create" className="nav-link">
							Create Book
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/books/:bookId/edit" className="nav-link">
							Edit Book
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default MathNavbar;
