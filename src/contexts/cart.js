import { createContext, useState } from "react";

export const Cart = createContext({ items: [], add: (newItem, amount) => {} });

export const CartProvider = (props) => {
	const [items, setItems] = useState([]);

	const add = (newItem, amount) => {
		setItems((oldItems) => {
			const newItems = [...oldItems];
			for (const i in newItems) {
				if (newItems[i].id === newItem.id) {
					newItems[i].amount += amount;
					return newItems;
				}
			}
			newItems.push({ ...newItem, amount });
			return newItems;
		});
	};

	return <Cart.Provider value={{ items, add }}>{props.children}</Cart.Provider>;
};
