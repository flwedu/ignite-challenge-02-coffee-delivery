import type { CoffeeInfo } from "../../interfaces/CoffeInfo.ts";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard.tsx";
import { StyledGrid } from "./styles.ts";

interface CoffeeCardsListProps {
	data: CoffeeInfo[];
}

export function CoffeCardsList({ data }: CoffeeCardsListProps) {
	return (
		<StyledGrid>
			{data.map((item) => {
				return <CoffeeCard key={item.id} {...item} />;
			})}
		</StyledGrid>
	);
}
