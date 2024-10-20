import { createBrowserRouter } from "react-router-dom";

import App from "@/App.tsx";
import { Checkout } from "@/pages/Checkout/Checkout.tsx";
import { Success } from "@/pages/Success/Success.tsx";

import { Home } from "./pages/Home/Home.tsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/checkout",
				element: <Checkout />,
			},
			{
				path: "/order/:orderId/success",
				element: <Success />,
			},
		],
	},
]);
