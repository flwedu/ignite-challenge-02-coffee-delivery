import { CoffeeCardsList } from "@/components/CooffeeCardsList/CoffeCardsList.tsx";
import { Intro } from "../../components/Intro/Intro.tsx";

export function Home() {
	return (
		<div>
			<Intro />
			<CoffeeCardsList />
		</div>
	);
}
