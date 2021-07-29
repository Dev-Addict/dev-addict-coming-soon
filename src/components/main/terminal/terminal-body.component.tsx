import React from 'react';

import {Container, Home, Link, UserText} from './terminal-body.components';
import {Typed} from '../../shared/typed.component';
import {Delay} from '../../shared/delay.component';

export const TerminalBody = () => {
	return (
		<Container>
			<Delay delay={100}>
				<Home />
				<UserText>
					<Typed
						strings={['echo "Coming Soon."']}
						typeSpeed={20}
						cursorChar="█"
						delayOnRemovingCursor={500}
					/>
				</UserText>
			</Delay>
			<Delay delay={2000}>
				<UserText>Coming Soon.</UserText>
			</Delay>
			<Delay delay={2300}>
				<Home />
				<UserText>
					<Typed
						strings={['contact owner']}
						typeSpeed={20}
						cursorChar="█"
						delayOnRemovingCursor={500}
					/>
				</UserText>
			</Delay>
			<Delay delay={4000}>
				<div>
					<UserText>
						Email:{' '}
						<Link target="_blank" href="mailto:aria.azadi.pour@protonmail.com">
							aria.azadi.pour@protonmail.com
						</Link>
					</UserText>
				</div>
				<div>
					<UserText>
						Telegram:{' '}
						<Link target="_blank" href="https://t.me/AriaAzadiPour">
							@AriaAzadiPour
						</Link>
					</UserText>
				</div>
			</Delay>
			<Delay delay={4400}>
				<Home />
				<UserText>
					<Typed
						strings={['']}
						typeSpeed={20}
						cursorChar="█"
						removeCursorOnCompletion={false}
					/>
				</UserText>
			</Delay>
		</Container>
	);
};
