import React, {FC, SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const MinimizeIcon: FC<Props> = ({...props}) => {
	return (
		<svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path fill="#7C7E82" d="M0 18h46v10H0z" />
		</svg>
	);
};
