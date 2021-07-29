import styled from 'styled-components';

import {Color} from '../../../constants/color.constant';
import React from 'react';

export const Container = styled.div`
	width: 100%;
	height: calc(100% - 76px);
	background-color: ${Color.WOOD_SMOKE}DD;
	border-radius: 0 0 5px 5px;
	overflow-y: scroll;
	overflow-x: hidden;
	position: relative;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${Color.TITAN_WHITE};
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${Color.MANATEE};
	}

	@media only screen and (max-width: 1000px) {
		border-radius: 0;
		height: calc(100% - 40px);
	}
`;

export const SystemText = styled.span`
	color: ${Color.SCREAMING_GREEN};
	font-weight: bold;
`;

export const UserText = styled.span`
	color: ${Color.TITAN_WHITE};
`;

export const Link = styled.a`
	color: ${Color.TITAN_WHITE};
	text-decoration: underline;
	transition: all 336ms;

	&:hover {
		opacity: 0.5;
	}
`;

export const Home = () => {
	return (
		<SystemText>
			[dev-addict@website <UserText>~</UserText>]${' '}
		</SystemText>
	);
};
