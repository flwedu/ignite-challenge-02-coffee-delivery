import type { CoffeeInfo } from "@/interfaces/CoffeInfo.ts";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard.tsx";
import { StyledGrid } from "./styles.ts";

interface CoffeeCardsListProps {
	data: CoffeeInfo[];
}

export function CoffeeCardsList({ data }: CoffeeCardsListProps) {
	return (
		<StyledGrid>
			{data.map((item) => {
				return <CoffeeCard key={item.id} coffee={item} />;
			})}
		</StyledGrid>
	);
}
