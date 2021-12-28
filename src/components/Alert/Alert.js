import Modal from "../UI/Modal/Modal";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from "./Alert.module.css";

const Alert = (props) => {
	return (
		<Modal show={props.show} onBackdropClick={props.onConfirm}>
			<Card className={classes.alert}>
				<main>
					<p className={classes.alertText}>{props.children}</p>
				</main>
				<footer>
					<Button onClick={props.onConfirm} className={classes.confirmBtn}>
						Confirm
					</Button>
				</footer>
			</Card>
		</Modal>
	);
};

export default Alert;
