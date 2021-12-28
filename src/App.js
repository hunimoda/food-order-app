import React from "react";
import { CartProvider } from "./contexts/cart";

import MainHeader from "./components/MainHeader/MainHeader";
import background from "./food-background.jpg";
import Notice from "./components/Notice/Notice";
import MenuList from "./components/MenuList/MenuList";
import classes from "./App.module.css";

function App() {
	return (
		<CartProvider>
			<MainHeader />
			<main className={classes["app-main"]}>
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
			<footer className={classes.mainFooter}>© 2021 HUNIMODA</footer>
		</CartProvider>
	);
}

export default App;
