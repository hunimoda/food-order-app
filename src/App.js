import React from "react";
import classes from "./App.module.css";
import background from "./food-background.jpg";

import MainHeader from "./components/MainHeader/MainHeader";

function App() {
	return (
		<React.Fragment>
			<MainHeader />
			<main>
				<img
					className={classes["bg-image"]}
					src={background}
					alt="background"
				/>
			</main>
		</React.Fragment>
	);
}

export default App;
