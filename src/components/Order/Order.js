import React from "react";
import Modal from "../UI/Modal/Modal";
import OrderItem from "./OrderItem/OrderItem";
import Button from "../UI/Button/Button";

import classes from "./Order.module.css";

const Order = (props) => {
	const main = (
		<React.Fragment>
			<OrderItem />
			<OrderItem />
			<div className={classes.total}>
				<h3>Total Amount</h3>
				<h3>$88.99</h3>
			</div>
		</React.Fragment>
	);

	const footer = (
		<React.Fragment>
			<Button className={classes.close}>Close</Button>
			<Button className={classes.order}>Order</Button>
		</React.Fragment>
	);
	return <Modal main={main} footer={footer} show={props.show} />;
};

export default Order;
