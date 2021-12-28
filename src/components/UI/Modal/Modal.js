import React, { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Modal = (props) => {
	if (props.show === false) {
		return null;
	}

	return createPortal(
		<Fragment>
			<div className={classes.backdrop} onClick={props.onBackdropClick} />
			<div className={classes.modal}>{props.children}</div>
		</Fragment>,
		document.getElementById("modal")
	);
};

export default Modal;
