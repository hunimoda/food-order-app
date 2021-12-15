import React from "react";

import Card from "../Card/Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
	if (!props.show) {
		return null;
	}

	return (
		<div>
			<div className={classes.overlay} onClick={props.onClose}></div>
			<Card className={`${props.className} ${classes.modal}`}>
				<main>{props.main}</main>
				<footer>{props.footer}</footer>
			</Card>
		</div>
	);
};

export default Modal;
