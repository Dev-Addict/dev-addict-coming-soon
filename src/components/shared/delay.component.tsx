import React, {FC, useEffect, useState} from 'react';

interface Props {
	delay?: number;
}

export const Delay: FC<Props> = ({children, delay}) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setShow(true);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	if (!show) return <></>;

	return <div>{children}</div>;
};
