import React, {FC, useRef} from 'react';
import NTyped, {ReactTypedProps} from 'react-typed';

interface Props extends ReactTypedProps {
	removeCursorOnCompletion?: boolean;
	delayOnRemovingCursor?: number;
}

export const Typed: FC<Props> = ({
	removeCursorOnCompletion = true,
	delayOnRemovingCursor,
	...props
}) => {
	const ref = useRef<any>(null);

	return (
		<NTyped
			typedRef={(typed: any) => (ref.current = typed)}
			onComplete={() => {
				if (removeCursorOnCompletion)
					if (!delayOnRemovingCursor) ref.current?.cursor.remove();
					else
						setTimeout(() => {
							ref.current?.cursor.remove();
						}, delayOnRemovingCursor);
			}}
			{...props}
		/>
	);
};
