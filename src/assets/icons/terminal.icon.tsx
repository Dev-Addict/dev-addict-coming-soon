import React, {FC, SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const TerminalIcon: FC<Props> = ({...props}) => {
	return (
		<svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M0 2a2 2 0 012-2h42a2 2 0 012 2v42a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
				fill="#575757"
			/>
			<path
				d="M27.996 24v-4h-12v4h12zM6.742 20L4 17.094 10.172 12 4 6.91 6.742 4 16 12l-9.258 8z"
				fill="#DCDCDC"
			/>
		</svg>
	);
};
