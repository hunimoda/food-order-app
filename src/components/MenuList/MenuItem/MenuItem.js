import Button from "../../UI/Button/Button";
import classes from "./MenuItem.module.css";

const MenuItem = () => {
	return (
		<div className={classes["menu-item"]}>
			<div>
				<h4>Sushi</h4>
				<p>Finest fish and veggies</p>
				<h5>$22.99</h5>
			</div>
			<form>
				<div className={classes["amount-container"]}>
					<label>Amount</label>
					<input type="number" value="1" />
				</div>
				<Button className={classes["add-btn"]}>+Add</Button>
			</form>
		</div>
	);
};

export default MenuItem;
