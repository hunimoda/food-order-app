import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
	return (
		<li className={classes["order-item"]}>
			<div className={classes["order-item__info"]}>
				<h4>{props.name}</h4>
				<div>
					<h5 className={classes["order-item__price"]}>
						${props.price}
					</h5>
					<div className={classes["order-item__count"]}>
						x {props.amount}
					</div>
				</div>
			</div>
			<div className={classes.control}>
				<button>
					<i className="fas fa-minus"></i>
				</button>
				<button>
					<i className="fas fa-plus"></i>
				</button>
			</div>
		</li>
	);
};

export default OrderItem;
