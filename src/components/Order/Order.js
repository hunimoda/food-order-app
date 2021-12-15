import React, { useContext } from "react";
import CartContext from "../../contexts/cart";

import Modal from "../UI/Modal/Modal";
import OrderItem from "./OrderItem/OrderItem";
import Button from "../UI/Button/Button";

import classes from "./Order.module.css";

const Order = (props) => {
	const ctx = useContext(CartContext);

	const orderHandler = () => {
		console.log(ctx.cart);
		props.onClose();
	};

	const main = (
		<ul>
			{ctx.cart.map((item, index) => (
				<OrderItem
					key={index}
					name={item.name}
					price={item.price}
					amount={item.amount}
				/>
			))}
			<div className={classes.total}>
				<h3>Total Amount</h3>
				<h3>$88.99</h3>
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
			show={props.show}
			onClose={props.onClose}
		/>
	);
};

export default Order;
