import Button from "../../UI/Button/Button";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
	return (
		<div className={classes["menu-item"]}>
			<div>
				<h4>{props.name}</h4>
				<p>{props.description}</p>
				<h5>${props.price}</h5>
			</div>
			<form>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input type="number" defaultValue="1" />
				</div>
				<Button type="submit" className={classes["add-btn"]}>
					+Add
				</Button>
			</form>
		</div>
	);
};

export default MenuItem;
