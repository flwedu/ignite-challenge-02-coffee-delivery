import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Aside, Container } from "./styles.ts";

export function NavHeader() {
	const cart = [];

	return (
		<Container>
			<Link to="/">
				<img src="/logo.svg" alt="Coffee Delivery" />
			</Link>

			<Aside>
				<div>
					<MapPin size={22} weight="fill" />
					<span>Location, BR</span>
				</div>

				<Link to={"checkout"} aria-disabled={cart.length === 0}>
					<ShoppingCart size={22} weight="fill" />
					{cart.length > 0 ? <span>{cart.length}</span> : null}
				</Link>
			</Aside>
		</Container>
	);
}
