import React, { useContext, useEffect } from "react";
import { Cart } from "../../contexts/cart";
import useHttp from "../../hooks/useHttp";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import Button from "../UI/Button/Button";

import classes from "./Order.module.css";

const Order = (props) => {
	const cart = useContext(Cart);

	const isCartEmpty = cart.items.length === 0;
	const totalPrice = !isCartEmpty
		? cart.items
				.map((item) => item.price * item.amount)
				.reduce((previous, current) => previous + current, 0)
				.toFixed(2)
		: null;

	const orderCartHandler = () => {
		// console.log(cart.items);
		// sendHttpRequest(
		// 	"https://react-http-33900-default-rtdb.firebaseio.com/meals.json"
		// );
	};
	// useEffect(() => {
	// 	if (!response.hasError) {
	// 		console.log(response.data);
	// 		console.log(cart.items);
	// 	}
	// }, [response]);

	const closeBtnClass = !isCartEmpty
		? classes["transparent-btn"]
		: `${classes["filled-btn"]} ${classes["closed-btn"]}`;

	return (
		<Modal show={props.show}>
			<main>
				<OrderList />
				{!isCartEmpty && (
					<div className={classes.total}>
						<h3>Total Price</h3>
						<h3>${totalPrice}</h3>
					</div>
				)}
			</main>
			<footer>
				<Button className={closeBtnClass} onClick={props.onClose}>
					Close
				</Button>
				{!isCartEmpty && (
					<Button className={classes["filled-btn"]} onClick={orderCartHandler}>
						Order
					</Button>
				)}
			</footer>
		</Modal>
	);
};

export default Order;
