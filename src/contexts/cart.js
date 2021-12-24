import { createContext, useState } from "react";

export const Cart = createContext({
	items: [],
	add: (newItem, amount) => {},
	reduce: (id) => {},
});

export const CartProvider = (props) => {
	const [items, setItems] = useState([]);

	const add = (newItem, amount) => {
		setItems((oldItems) => {
			let isNewItemAdded = false;
			const newItems = oldItems.map((item) => {
				if (item.id === newItem.id) {
					isNewItemAdded = true;
					return { ...item, amount: item.amount + amount };
				}
				return { ...item };
			});
			if (!isNewItemAdded) {
				newItems.push({ ...newItem, amount });
			}
			return newItems;
		});
	};

	const reduce = (id) => {
		setItems((oldItems) => {
			return oldItems
				.map((item) => {
					if (item.id === id) {
						return { ...item, amount: item.amount - 1 };
					}
					return { ...item };
				})
				.filter((item) => item.amount !== 0);
		});
	};

	return (
		<Cart.Provider value={{ items, add, reduce }}>
			{props.children}
		</Cart.Provider>
	);
};
