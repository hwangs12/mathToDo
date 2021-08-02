import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Data from "./data";

const Body = (props) => {
	const [axioms, setAxioms] = useState(props.statements);

	//this connects the state from Components state
	useEffect(() => {
		setAxioms(props.statements);
	}, [props.statements]);

	const removeItem = (id) => {
		let unremovedItem = axioms.filter((sentence) => {
			return sentence.id !== id;
		});
		setAxioms(unremovedItem);
		Data[props.index].statements = unremovedItem;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newAxiom = axioms.concat({
			id: uuidv4(),
			statement: document.getElementById("statement").value,
		});
		setAxioms(newAxiom);
		Data[props.index].statements = newAxiom;
		document.getElementById("statement").value = "";
	};

	return (
		<>
			<ol>
				{axioms.map((sentence) => {
					const { id, statement } = sentence;
					return (
						<li key={id} className="sentences">
							<p>
								<strong>{statement}</strong>
							</p>
							<button>EDIT</button>
							<button onClick={() => removeItem(id)}>
								REMOVE
							</button>
						</li>
					);
				})}
			</ol>
			<div className="form">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="axiom"
						id="statement"
						required="required"
					/>
					<button>ADD</button>
				</form>
			</div>
		</>
	);
};

export default Body;
