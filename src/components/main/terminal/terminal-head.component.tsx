import React from 'react';
import styled from 'styled-components';

import {TerminalIcon} from '../../../assets/icons/terminal.icon';
import {Color} from '../../../constants/color.constant';
import {CloseIcon} from '../../../assets/icons/close.icon';
import {ResizeIcon} from '../../../assets/icons/resize.icon';
import {MinimizeIcon} from '../../../assets/icons/minimize.icon';
import {PullIcon} from '../../../assets/icons/pull.icon';

const Container = styled.div`
	background-color: ${Color.WOOD_SMOKE};
	border-radius: 5px 5px 0 0;

	@media only screen and (max-width: 1000px) {
		border-radius: 0;
	}

	& > * {
		padding: 10px;
	}
`;

const Top = styled.div`
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: space-between;
	font-size: 13px;
	color: ${Color.ROLLING_STONE};
	height: 36px;

	@media only screen and (max-width: 1000px) {
		display: none;
	}
`;

const Controls = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;

	& > * {
		margin-left: 10px;
	}
`;

const Menu = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: ${Color.MANATEE};
	font-size: 14px;
	height: 40px;

	& > * {
		margin-right: 20px;
	}
`;

export const TerminalHead = () => {
	return (
		<Container>
			<Top>
				<TerminalIcon width={16} height={16} />
				<div>Terminal - dev-addict@website:~</div>
				<Controls>
					<CloseIcon width={14} height={14} />
					<ResizeIcon width={10} height={10} />
					<MinimizeIcon width={10} height={10} />
					<PullIcon width={10} height={10} />
				</Controls>
			</Top>
			<Menu>
				<div>File</div>
				<div>Edit</div>
				<div>View</div>
				<div>Terminal</div>
				<div>Tabs</div>
				<div>Help</div>
			</Menu>
		</Container>
	);
};
