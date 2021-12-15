import Button from "../../UI/Button/Button";
import classes from "./Cart.module.css";

const Cart = (props) => {
	return (
		<Button className={classes["cart-btn"]}>
			<i className="fas fa-shopping-cart"></i>
			<div className={classes["cart-btn__text"]}>Your Cart</div>
			<div className={classes["cart-btn__count"]}>{props.count}</div>
		</Button>
	);
};

export default Cart;
