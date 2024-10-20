import { mixins } from "@/styles/mixins";
import { styled } from "styled-components";

export const SyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-items: start;
	gap: 54px;
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 80px;
`;

export const StyledH2 = styled.h2`
	${mixins.fonts.titleL};
	color: ${({ theme }) => theme.colors["base-title"]};
`;

export const StyledGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	row-gap: 40px;
	column-gap: 32px;
`;
