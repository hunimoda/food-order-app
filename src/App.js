import React from "react";
import classes from "./App.module.css";
import background from "./food-background.jpg";

import MainHeader from "./components/MainHeader/MainHeader";
import Notice from "./components/Notice/Notice";
import MenuList from "./components/MenuList/MenuList";

function App() {
	return (
		<React.Fragment>
			<MainHeader />
			<main>
				<div className={classes["bg-image-container"]}>
					<img
						className={classes["bg-image"]}
						src={background}
						alt="background"
					/>
				</div>
				<Notice />
				<MenuList />
			</main>
		</React.Fragment>
	);
}

export default App;
