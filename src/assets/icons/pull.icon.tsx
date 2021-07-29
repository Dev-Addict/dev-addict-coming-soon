import React, {FC, SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const PullIcon: FC<Props> = ({...props}) => {
	return (
		<svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path fill="#7C7E82" d="M0 31.27h46V41H0z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 27.378h46L23 5 0 27.378z"
				fill="#7C7E82"
			/>
		</svg>
	);
};
