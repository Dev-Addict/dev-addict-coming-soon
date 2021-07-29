import React, {FC, SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const ResizeIcon: FC<Props> = ({...props}) => {
	return (
		<svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M0 20.506V46h25.494L0 20.506zm46 4.988V0H20.506L46 25.494z"
				fill="#7C7E82"
			/>
		</svg>
	);
};
