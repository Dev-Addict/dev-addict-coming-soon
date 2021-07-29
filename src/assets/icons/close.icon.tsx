import React, {FC, SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const CloseIcon: FC<Props> = ({...props}) => {
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
				d="M23 46c12.703 0 23-10.297 23-23S35.703 0 23 0 0 10.297 0 23s10.297 23 23 23zM12.172 17.828a4 4 0 115.656-5.656l4.95 4.95 4.95-4.95a4 4 0 015.657 5.656l-4.95 4.95 4.95 4.95a4 4 0 01-5.657 5.657l-4.95-4.95-4.95 4.95a4 4 0 11-5.656-5.657l4.95-4.95-4.95-4.95z"
				fill="#FF4242"
			/>
		</svg>
	);
};
