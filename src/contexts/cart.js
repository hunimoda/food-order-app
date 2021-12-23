import { createContext, useState } from "react";

export const Cart = createContext({ items: [] });

export const CartProvider = (props) => {
	const [items, setItems] = useState([]);
	return <Cart.Provider value={{ items }}>{props.children}</Cart.Provider>;
};
