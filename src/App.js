import React from "react";
import { CartProvider } from "./contexts/cart";

import MainHeader from "./components/MainHeader/MainHeader";
import background from "./food-background.jpg";
import Notice from "./components/Notice/Notice";
import MenuList from "./components/MenuList/MenuList";
import Modal from "./components/UI/Modal/Modal";
import classes from "./App.module.css";

const items = [
	{
		id: 1,
		name: "Sushi",
		desc: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: 2,
		name: "Schnitzel",
		desc: "A german specialty!",
		price: 16.5,
	},
	{
		id: 3,
		name: "Barbecue Burger",
		desc: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: 4,
		name: "Green Bowl",
		desc: "Healthy... and green...",
		price: 18.99,
	},
];

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
				<MenuList items={items} />
			</main>
		</CartProvider>
	);
}

export default App;
