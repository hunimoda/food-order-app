import React, { useState } from "react";
import classes from "./App.module.css";
import background from "./food-background.jpg";

import MainHeader from "./components/MainHeader/MainHeader";
import Notice from "./components/Notice/Notice";
import MenuList from "./components/MenuList/MenuList";

import CartContext from "./contexts/cart";

const items = [
	{
		name: "Sushi",
		description: "Finest fish and veggies",
		price: "22.99",
	},
	{
		name: "Schnitzel",
		description: "A german specialty!",
		price: "16.50",
	},
];

function App() {
	const [cart, setCart] = useState([]);

	return (
		<CartContext.Provider value={{ cart: cart, setCart: setCart }}>
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
				<MenuList items={items} />
			</main>
		</CartContext.Provider>
	);
}

export default App;
