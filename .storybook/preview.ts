import type { Preview } from '@storybook/react';

import '@/css/base/index.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ['Editor', 'Components']
			}
		}
	},
};

export default preview;
