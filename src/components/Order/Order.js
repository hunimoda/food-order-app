import React, { useState, Fragment, useContext } from "react";
import { Cart } from "../../contexts/cart";
import useHttp from "../../hooks/useHttp";

import Modal from "../UI/Modal/Modal";
import OrderList from "./OrderList/OrderList";
import Button from "../UI/Button/Button";
import useEffectSkipMount from "../../hooks/useEffectSkipMount";

import classes from "./Order.module.css";
import Alert from "../Alert/Alert";

const Order = (props) => {
	const cart = useContext(Cart);

	const { response, sendHttpRequest, isLoading } = useHttp();
	const [showSuccessfulOrder, setShowSuccessfulOrder] = useState(false);

	const isCartEmpty = cart.items.length === 0;
	const totalPrice = !isCartEmpty
		? cart.items
				.map((item) => item.price * item.amount)
				.reduce((previous, current) => previous + current, 0)
				.toFixed(2)
		: null;

	const orderCartHandler = () => {
		const order = {};
		cart.items.forEach((item) => {
			order[item.id] = item.amount;
		});
		sendHttpRequest(
			"https://react-http-33900-default-rtdb.firebaseio.com/orders.json",
			order
		);
	};
	useEffectSkipMount(() => {
		if (!response.hasError) {
			setShowSuccessfulOrder(true);
		} else {
			//
		}
	}, [response]);

	const closeBtnClass = !isCartEmpty
		? classes["transparent-btn"]
		: `${classes["filled-btn"]} ${classes["closed-btn"]}`;

	return (
		<Fragment>
			<Modal show={props.show && !isLoading && !showSuccessfulOrder}>
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
						<Button
							className={classes["filled-btn"]}
							onClick={orderCartHandler}
						>
							Order
						</Button>
					)}
				</footer>
			</Modal>
			<Modal show={isLoading}>
				<p className={classes.wait}>Wait...</p>
			</Modal>
			<Alert
				show={showSuccessfulOrder}
				onConfirm={() => {
					setShowSuccessfulOrder(false);
					props.onClose();
				}}
			>
				Order was successful!
			</Alert>
		</Fragment>
	);
};

export default Order;
