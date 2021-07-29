import React from 'react';

import {Terminal} from './main/terminal/terminal.component';
import {GlobalStyle} from './styles/global.style';

export const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Terminal />
		</div>
	);
};
