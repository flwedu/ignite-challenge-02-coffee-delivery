import {
	createContext,
	type PropsWithChildren,
	useCallback,
	useReducer,
} from "react";
import { useNavigate } from "react-router-dom";

import type { Item } from "@/interfaces/Item.ts";
import type { Order } from "@/interfaces/Order.ts";
import {
	addItemAction,
	checkoutCartAction,
	decrementItemQuantityAction,
	incrementItemQuantityAction,
	removeItemAction,
} from "@/reducers/cart/actions.ts";
import { shoppingCartReducer } from "@/reducers/cart/reducer.ts";

interface ShoppingCartContextType {
	addItem: (item: Item) => void;
	cartItems: Item[];
	checkout: (order: Order) => void;
	decrementItemQuantity: (itemId: Item["id"]) => void;
	incrementItemQuantity: (itemId: Item["id"]) => void;
	orders: Order[];
	removeItem: (itemId: Item["id"]) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function ShoppingCartContextProvider({ children }: PropsWithChildren) {
	const [cartState, dispatch] = useReducer(shoppingCartReducer, {
		cartItems: [],
		orders: [],
	});

	const navigate = useNavigate();
	const { cartItems, orders } = cartState;

	const addItem = useCallback((item: Item) => {
		dispatch(addItemAction(item));
	}, []);

	const incrementItemQuantity = useCallback((itemId: Item["id"]) => {
		dispatch(incrementItemQuantityAction(itemId));
	}, []);

	const decrementItemQuantity = useCallback((itemId: Item["id"]) => {
		dispatch(decrementItemQuantityAction(itemId));
	}, []);

	const removeItem = useCallback((itemId: Item["id"]) => {
		dispatch(removeItemAction(itemId));
	}, []);

	const checkout = useCallback(
		(order: Order) => {
			dispatch(checkoutCartAction(order, navigate));
		},
		[navigate],
	);

	return (
		<ShoppingCartContext.Provider
			value={{
				cartItems,
				orders,
				addItem,
				incrementItemQuantity,
				decrementItemQuantity,
				removeItem,
				checkout,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
