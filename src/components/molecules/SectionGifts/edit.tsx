import { useMemo } from 'react';
import { _x } from '@wordpress/i18n';

import { useGraphQlApi } from '#/hooks';

// Data
import { getData } from './data';

// block
import { WpBlockEditProps, WpBlockType } from '@/typings';
import block from './block.json';
import { SectionGiftsProps } from '.';

// styles
import './styles.css';
import './styles.edit.css';
import { InspectorControls } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: WpBlockEditProps<SectionGiftsProps>) => {
	const { queryVars } = props.attributes;

	const variables = useMemo(() => ({ queryVars }), [queryVars]);
	const { isLoading, data } = useGraphQlApi(getData, variables);

	return (
		<>
			<InspectorControls>
				<TextControl
					value={props.attributes.title}
					onChange={(title: string) => props.setAttributes({ title })}
					label={_x('Title', 'SectionGifts block', 'supt')}
				/>
			</InspectorControls>

			<div className="supt-section-gifts">
				<div className="supt-section-gifts__inner">
					<div>
						<h2>{props.attributes.title}</h2>
						<div>
							<RichText
								value={props.attributes.description}
								onChange={(description: string) =>
									props.setAttributes({ description })
								}
								placeholder="Description..."
								tagName="p"
							/>
						</div>
					</div>
				</div>

				{/* <div>
				<h2>Dynamic data fetching</h2>
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div> */}
			</div>
		</>
	);
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
			title: {
				type: 'string',
				default: '',
			},
			description: {
				type: 'string',
				default: '',
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
