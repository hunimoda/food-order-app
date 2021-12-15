import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

import classes from "./Alert.module.css";

const Alert = (props) => {
	if (!props.show) {
		return null;
	}

	const main = <p className={classes.content}>{props.content}</p>;
	const footer = (
		<Button className={classes.confirm} onClick={props.onConfirm}>
			Confirm
		</Button>
	);

	return (
		<Modal
			className={classes.modal}
			main={main}
			footer={footer}
			show={true}
			onClose={props.onConfirm}
		/>
	);
};

export default Alert;
