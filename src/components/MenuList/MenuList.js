import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import classes from "./MenuList.module.css";

const MenuList = (props) => {
	return (
		<Card className={classes["menu-list"]}>
			{props.items.map((item, index) => (
				<MenuItem
					key={index}
					id={index}
					name={item.name}
					description={item.description}
					price={item.price}
				/>
			))}
		</Card>
	);
};

export default MenuList;
