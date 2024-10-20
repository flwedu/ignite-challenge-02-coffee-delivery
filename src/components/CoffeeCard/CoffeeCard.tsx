import { QuantityInput } from "@/components/Form";
import type { CoffeeInfo } from "@/interfaces/CoffeInfo.ts";
import { CheckFat, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useTheme } from "styled-components";
import {
	CoffeeImg,
	Container,
	Control,
	Description,
	Order,
	Price,
	Tags,
	Title,
} from "./styles.ts";

type CoffeeCardProps = {
	coffee: CoffeeInfo;
};

export function CoffeeCard({ coffee }: CoffeeCardProps) {
	const theme = useTheme();
	const [isItemAdded, setIsItemAdded] = useState(false);
	const [quantity, setQuantity] = useState(1);

	const addItem = (_: { id: string; quantity: number }) => {
		return false;
	};

	const incrementQuantity = () => {
		setQuantity((state) => state + 1);
	};

	const decrementQuantity = () => {
		setQuantity((state) => {
			return state > 1 ? state - 1 : 1;
		});
	};

	const handleAddItem = () => {
		addItem({ id: coffee.id, quantity });
		setQuantity(1);
		setIsItemAdded(true);
	};

	return (
		<Container>
			<CoffeeImg src={coffee.imgSrc} alt={coffee.title} />
			<Tags>
				{coffee.tags.map((tag) => (
					<span key={tag}>{tag}</span>
				))}
			</Tags>
			<Title>{coffee.title}</Title>
			<Description>{coffee.description}</Description>
			<Control>
				<Price>
					<span>R$</span>
					<span>{coffee.price.toFixed(2)}</span>
				</Price>
				<Order $itemAdded={isItemAdded}>
					<QuantityInput
						quantity={quantity}
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
					/>
					<button type="button" disabled={isItemAdded} onClick={handleAddItem}>
						{isItemAdded ? (
							<CheckFat
								weight="fill"
								size={22}
								color={theme.colors["base-card"]}
							/>
						) : (
							<ShoppingCart size={22} color={theme.colors["base-card"]} />
						)}
					</button>
				</Order>
			</Control>
		</Container>
	);
}
