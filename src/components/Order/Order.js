import React, { useContext } from "react";
import { Cart } from "../../contexts/cart";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import Button from "../UI/Button/Button";

import classes from "./Order.module.css";

const Order = (props) => {
	const cart = useContext(Cart);

	const orderHandler = () => {
		console.log(cart.items);
		props.onClose();
	};

	let totalPrice = 0;
	if (cart.items) {
		totalPrice = cart.items
			.map((item) => item.price * item.amount)
			.reduce((previous, current) => previous + current, 0)
			.toFixed(2);
	}

	return (
		<Modal show={props.show}>
			<main>
				<OrderList />
				<div className={classes.total}>
					<h3>Total Amount</h3>
					<h3>${totalPrice}</h3>
				</div>
			</main>
			<footer>
				<Button className={classes["close-btn"]} onClick={props.onClose}>
					Close
				</Button>
				<Button className={classes["order-btn"]} onClick={orderHandler}>
					Order
				</Button>
			</footer>
		</Modal>
	);
};

export default Order;
