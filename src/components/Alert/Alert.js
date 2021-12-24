import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

import classes from "./Alert.module.css";

const Alert = (props) => {
	return (
		<Modal
			className={classes.alert}
			show={props.show}
			onBackdropClick={props.onConfirm}
		>
			<main>
				<p className={classes.message}>{props.children}</p>
			</main>
			<footer>
				<Button className={classes.confirm} onClick={props.onConfirm}>
					Confirm
				</Button>
			</footer>
		</Modal>
	);
};

export default Alert;
