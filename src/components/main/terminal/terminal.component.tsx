import React from 'react';
import styled from 'styled-components';

import {TerminalBody} from './terminal-body.component';
import {TerminalHead} from './terminal-head.component';

const Container = styled.div`
	width: calc(100vw - 200px);
	height: calc(100vh - 100px);
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 5px;
	font-family: 'Source Code Pro', monospace;

	@media only screen and (max-width: 1000px) {
		width: 100vw;
		height: 100vh;
		position: unset;
		top: auto;
		left: auto;
		border-radius: 0;
		transform: none;
	}
`;

export const Terminal = () => {
	return (
		<Container>
			<TerminalHead />
			<TerminalBody />
		</Container>
	);
};
