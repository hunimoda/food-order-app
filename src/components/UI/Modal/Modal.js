import React, { Fragment } from "react";
import { createPortal } from "react-dom";

import Card from "../Card/Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
	if (!props.show) {
		return null;
	}

	return createPortal(
		<Fragment>
			<div className={classes.backdrop} onClick={props.onBackdropClick} />
			<Card className={`${props.className} ${classes.modal}`}>
				{props.children}
			</Card>
		</Fragment>,
		document.getElementById("modal")
	);
};

export default Modal;
