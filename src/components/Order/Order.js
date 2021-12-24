import React, { useContext, useEffect } from "react";
import { Cart } from "../../contexts/cart";
import useHttp from "../../hooks/useHttp";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import Button from "../UI/Button/Button";

import classes from "./Order.module.css";

const Order = (props) => {
	const cart = useContext(Cart);
	const { response, sendHttpRequest, isLoading } = useHttp();

	let totalPrice = 0;
	if (cart.items) {
		totalPrice = cart.items
			.map((item) => item.price * item.amount)
			.reduce((previous, current) => previous + current, 0)
			.toFixed(2);
	}

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

	return (
		<Modal show={props.show}>
			<main>
				<OrderList />
				<div className={classes.total}>
					<h3>Total Price</h3>
					<h3>${totalPrice}</h3>
				</div>
			</main>
			<footer>
				<Button className={classes["close-btn"]} onClick={props.onClose}>
					Close
				</Button>
				<Button className={classes["order-btn"]} onClick={orderCartHandler}>
					Order
				</Button>
			</footer>
		</Modal>
	);
};

export default Order;
