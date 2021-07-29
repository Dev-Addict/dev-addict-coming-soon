import {createGlobalStyle} from 'styled-components';

import {Color} from '../../constants/color.constant';

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		user-select: none;
	}
	
	html, body {
		background-color: ${Color.CERULEAN};
		width: 100vw;
		height: 100vh;
    font-family: 'Open Sans', sans-serif;
	}
`;
