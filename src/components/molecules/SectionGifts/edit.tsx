import { useMemo } from 'react';
import { _x } from '@wordpress/i18n';

import { useGraphQlApi } from '#/hooks';

// Data
import { getData } from './data';

// block
import { WpBlockEditProps, WpBlockType } from '@/typings';
import block from './block.json';
import { SectionGifts, SectionGiftsProps } from '.';

// styles
import './styles.css';
import './styles.edit.css';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: WpBlockEditProps<SectionGiftsProps>) => {
	const { queryVars } = props.attributes;

	const variables = useMemo(() => ({ queryVars }), [queryVars]);
	const { isLoading, data } = useGraphQlApi(getData, variables);

	return <SectionGifts />;
};

/**
 * WORDPRESS BLOCK
 */
export const SectionGiftsBlock: WpBlockType<SectionGiftsProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		// parent: [],
		description: _x('', 'Block SectionGifts', 'supt'),
		category: '',
		icon: '',
		postTypes: ['page'],
		attributes: {
			isPreview: {
				type: 'boolean',
				default: false,
			},
			queryVars: {
				type: 'object',
				default: {},
			},
		},
		example: {
			attributes: {
				isPreview: true,
			},
		},
		edit: Edit,
		save: () => null,
	},
};
