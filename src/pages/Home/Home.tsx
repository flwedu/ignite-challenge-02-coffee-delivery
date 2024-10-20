import { CoffeeCardsList } from "@/components/CooffeeCardsList/CoffeCardsList.tsx";
import { Intro } from "../../components/Intro/Intro.tsx";
import { SyledContainer } from "./index.styles.ts";

export function Home() {
	return (
		<SyledContainer>
			<Intro />
			<CoffeeCardsList />
		</SyledContainer>
	);
}
