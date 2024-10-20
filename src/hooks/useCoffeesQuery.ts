import { fecthCoffeesList } from "@/api/fetchCoffees";
import { useQuery } from "@tanstack/react-query";

export function useCoffeesQuery() {
	return useQuery({
		queryKey: ["coffees"],
		queryFn: fecthCoffeesList,
		enabled: true,
	});
}
