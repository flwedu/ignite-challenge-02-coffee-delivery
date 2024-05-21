import type { defaultTheme } from "@/themes/default.ts";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useCallback } from "react";
import { useTheme } from "styled-components";
import { Heading, Hero, HeroContent, Info } from "./styles.ts";

const createIconPropsGetter =
	(theme: typeof defaultTheme) =>
	(color: keyof (typeof defaultTheme)["colors"]) => {
		return {
			weight: "fill",
			size: 32,
			style: { backgroundColor: theme.colors[color] },
			color: theme.colors.background,
		} as const;
	};

export function Intro() {
	const theme = useTheme();
	const getIconProps = useCallback(createIconPropsGetter(theme), []);

	return (
		<Hero>
			<HeroContent>
				<div>
					<Heading>
						<h1>Encontre o café perfeito para qualquer hora do dia</h1>
						<span>
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</span>
					</Heading>
					<Info>
						<div>
							<ShoppingCart {...getIconProps("yellow-dark")} />
							<span>Compra simples e segura</span>
						</div>
						<div>
							<Package {...getIconProps("base-text")} />
							<span>Embalagem mantém o café intacto</span>
						</div>
						<div>
							<Timer {...getIconProps("yellow")} />
							<span>Entrega rápida e rastreada</span>
						</div>
						<div>
							<Coffee {...getIconProps("purple")} />
							<span>O café chega fresquinho até você</span>
						</div>
					</Info>
				</div>
				<img src="/images/hero.svg" alt="A big coffe cup" />
			</HeroContent>

			<img src="/images/hero-bg.svg" id="hero-bg" alt="" />
		</Hero>
	);
}
