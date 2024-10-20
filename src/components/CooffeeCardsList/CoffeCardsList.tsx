import { useCoffeesQuery } from "@/hooks/useCoffeesQuery.ts";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard.tsx";
import { StyledGrid } from "./styles.ts";

export function CoffeeCardsList() {
	const { data, status } = useCoffeesQuery();

	if (status === "pending") {
		return <p>Carregando...</p>;
	}

	if (status === "error") {
		return <p>Ocorreu um erro ao carregar lista de cafés</p>;
	}

	return (
		<StyledGrid>
			{data.map((item) => {
				return <CoffeeCard key={item.id} coffee={item} />;
			})}
		</StyledGrid>
	);
}
