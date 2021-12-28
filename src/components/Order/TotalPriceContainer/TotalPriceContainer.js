import { useContext } from "react";

import { Cart } from "../../../contexts/cart";

import classes from "./TotalPriceContainer.module.css";

const TotalPriceContainer = () => {
	const cart = useContext(Cart);

	const totalPrice = cart.items
		.map((item) => item.price * item.amount)
		.reduce((previous, current) => previous + current, 0)
		.toFixed(2);

	return (
		<div className={classes.totalPriceContainer}>
			<h3>Total Price</h3>
			<h3>${totalPrice}</h3>
		</div>
	);
};

export default TotalPriceContainer;
