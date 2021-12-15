import classes from "./OrderItem.module.css";

const OrderItem = () => {
	return (
		<li className={classes["order-item"]}>
			<div className={classes["order-item__info"]}>
				<h4>Sushi</h4>
				<div>
					<h5 className={classes["order-item__price"]}>$22.99</h5>
					<div className={classes["order-item__count"]}>x 2</div>
				</div>
			</div>
			<div className={classes.control}>
				<button>
					<i class="fas fa-minus"></i>
				</button>
				<button>
					<i class="fas fa-plus"></i>
				</button>
			</div>
		</li>
	);
};

export default OrderItem;
