import "styled-components";
import type { defaultTheme } from "./themes/default.ts";

type DefaultThemeType = typeof defaultTheme;

declare module "styled-components" {
	export interface DefaultTheme extends DefaultThemeType {}
}
