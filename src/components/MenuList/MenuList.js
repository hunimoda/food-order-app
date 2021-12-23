import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import classes from "./MenuList.module.css";

const MenuList = (props) => {
	return (
		<Card className={classes["menu-list"]}>
			{props.items.map((item) => (
				<MenuItem key={item.id} item={item} />
			))}
		</Card>
	);
};

export default MenuList;
