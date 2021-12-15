import React, { useContext } from "react";
import CartContext from "../../contexts/cart";

import Modal from "../UI/Modal/Modal";
import OrderItem from "./OrderItem/OrderItem";
import Button from "../UI/Button/Button";

import classes from "./Order.module.css";

const Order = (props) => {
	const ctx = useContext(CartContext);

	if (!props.show) {
		return null;
	}

	const orderHandler = () => {
		console.log(ctx.cart);
		props.onClose();
	};

	const totalPrice = ctx.cart
		.map((item) => +item.price * +item.amount)
		.reduce((previous, current) => previous + current)
		.toFixed(2);

	const main = (
		<ul>
			{ctx.cart.map((item) => (
				<OrderItem
					key={item.id}
					id={item.id}
					name={item.name}
					price={item.price}
					amount={item.amount}
				/>
			))}
			<div className={classes.total}>
				<h3>Total Amount</h3>
				<h3>${totalPrice}</h3>
			</div>
		</ul>
	);

	const footer = (
		<React.Fragment>
			<Button className={classes.close} onClick={props.onClose}>
				Close
			</Button>
			<Button className={classes.order} onClick={orderHandler}>
				Order
			</Button>
		</React.Fragment>
	);
	return (
		<Modal
			main={main}
			footer={footer}
			show={true}
			onClose={props.onClose}
		/>
	);
};

export default Order;
