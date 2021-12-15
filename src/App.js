import React, { useState } from "react";
import classes from "./App.module.css";
import background from "./food-background.jpg";

import MainHeader from "./components/MainHeader/MainHeader";
import Notice from "./components/Notice/Notice";
import MenuList from "./components/MenuList/MenuList";

import CartContext from "./contexts/cart";
import Alert from "./components/Alert/Alert";
import Order from "./components/Order/Order";

const items = [
	{
		id: 1,
		name: "Sushi",
		desc: "Finest fish and veggies",
		price: "22.99",
	},
	{
		id: 2,
		name: "Schnitzel",
		desc: "A german specialty!",
		price: "16.50",
	},
	{
		id: 3,
		name: "Barbecue Burger",
		desc: "American, raw, meaty",
		price: "12.99",
	},
	{
		id: 4,
		name: "Green Bowl",
		desc: "Healthy... and green...",
		price: "18.99",
	},
];

function App() {
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);
	const [alert, setAlert] = useState({ content: "", show: false });

	return (
		<CartContext.Provider
			value={{
				cart: cart,
				setCart: setCart,
				setAlert: setAlert,
				setShowCart: setShowCart,
			}}
		>
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
			<Alert
				content={alert.content}
				show={alert.show}
				onConfirm={() => {
					setAlert({ content: "", show: false });
				}}
			/>
			<Order
				show={showCart}
				onClose={() => {
					setShowCart(false);
				}}
			/>
		</CartContext.Provider>
	);
}

export default App;
