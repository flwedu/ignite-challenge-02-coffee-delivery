import type { CoffeeInfo } from "@/interfaces/CoffeInfo";

/**
 * Fetches the list of coffees from the API.
 *
 * @returns {Promise<CoffeeInfo[]>} A promise that resolves to the list of coffees.
 */
export async function fecthCoffeesList(): Promise<CoffeeInfo[]> {
	return fetch(`${import.meta.env.VITE_API_URL}/coffees`)
		.then((response) => response.json())
		.then((data) => data);
}
