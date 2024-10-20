import { GlobalStyle } from "@/styles/global.ts";
import { defaultTheme } from "@/themes/default.ts";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavHeader } from "./components/NavHeader/NavHeader.tsx";

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<NavHeader />
			<Outlet />
		</ThemeProvider>
	);
}

export default App;
