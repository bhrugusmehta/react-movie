import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import "./App.css";

function App() {
	const [movie, setMovie] = useState({
		s: "Kungfu",
		results: [],
	});

	const apiurl = "https://www.omdbapi.com/?apikey=41034404";

	const searchInput = (e) => {
		let s = e.target.value;
		setMovie((prevState) => {
			return { ...prevState, s: s };
		});
	};

	const search = (e) => {
		axios(apiurl + "&s=" + movie.s).then(
			({ data }) => {
				let results = data.Search;
				setMovie((prevState) => {
					return {
						...prevState,
						results: results,
					};
				});
			}
		);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie app</h1>
			</header>
				<Search
					searchInput={searchInput}
					search={search}
				/>

				<div className="container">
					{movie.results.map((e) => (
						<div className="item">
							<img
								style={{ width: "100px" }}
								src={e.Poster}
							/>
							<h3 style={{ color: "black" }}>
								{e.Title}
							</h3>
						</div>
					))}
				</div>
				
		</div>
	);
}

export default App;
