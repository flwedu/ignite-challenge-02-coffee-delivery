import type { Item } from "@/interfaces/Item.ts";
import type { Order } from "@/interfaces/Order.ts";
import { ActionTypes, type Actions } from "@/reducers/cart/actions.ts";
import { produce } from "immer";

interface CartState {
	cartItems: Item[];
	orders: Order[];
}

export function shoppingCartReducer(state: CartState, action: Actions) {
	switch (action.type) {
		case ActionTypes.ADD_ITEM: {
			const { item } = action.payload;
			return produce(state, (draft) => {
				const itemInCart = draft.cartItems.find((it) => it.id === item.id);

				if (itemInCart) {
					itemInCart.quantity += item.quantity;
				}

				draft.cartItems.push(item);
			});
		}
		case ActionTypes.REMOVE_ITEM: {
			const { itemId } = action.payload;
			return produce(state, (draft) => {
				const itemIndex = draft.cartItems.findIndex((it) => it.id === itemId);

				if (itemIndex > -1) {
					draft.cartItems.splice(itemIndex, 1);
				}
			});
		}
		case ActionTypes.INCREMENT_ITEM_QUANTITY: {
			const { itemId } = action.payload;
			return produce(state, (draft) => {
				const itemInCart = draft.cartItems.find((it) => it.id === itemId);
				if (itemInCart) {
					itemInCart.quantity += 1;
				}
			});
		}
		case ActionTypes.DECREMENT_ITEM_QUANTITY: {
			const { itemId } = action.payload;
			return produce(state, (draft) => {
				const itemInCart = draft.cartItems.find((it) => it.id === itemId);
				if (itemInCart && itemInCart.quantity > 1) {
					itemInCart.quantity -= 1;
				}
			});
		}
		case ActionTypes.CHECKOUT_CART: {
			const { order, callback } = action.payload;
			return produce(state, (draft) => {
				const newOrder = {
					id: new Date().getTime(),
					items: state.cartItems,
					...order,
				};
				draft.orders.push(newOrder);
				draft.cartItems = [];

				callback(`/order/${newOrder.id}/success`);
			});
		}
		default: {
			return state;
		}
	}
}
