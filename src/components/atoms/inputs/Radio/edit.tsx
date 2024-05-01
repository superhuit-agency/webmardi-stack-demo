import { InspectorAdvancedControls, RichText } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import { IdControl } from '#/components';
import { WpBlockType } from '@/typings';
import block from './block.json';
import { RadioProps } from '.';

// styles
import './styles.css';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: BlockEditProps<RadioProps>) => {
	const { id = '', label, name, value } = props.attributes;

	return (
		<>
			{/* Settings Sidebar */}
			<InspectorAdvancedControls>
				<TextControl
					label={_x('Value', 'Value', 'supt')}
					placeholder={label}
					value={value}
					onChange={(value: string) => props.setAttributes({ value })}
					help={_x(
						'This is what will show in the form results if the radio is checked.',
						'Radio',
						'supt'
					)}
				/>
				<IdControl
					blockId={props.clientId.split('-')[0]}
					id={id}
					name={name}
					label={label}
					onChange={(id) => props.setAttributes({ id })}
				/>
			</InspectorAdvancedControls>

			{/* Block Editor */}
			<div className="supt-radio">
				<input type="radio" className="supt-radio__input" />
				<RichText
					className="supt-radio__label"
					tagName="span"
					placeholder={_x('Label', 'Label', 'supt')}
					value={label}
					onChange={(label: string) => props.setAttributes({ label })}
					multiline={false}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
};

/**
 * WORDPRESS BLOCK
 */
export const RadioBlock: WpBlockType<RadioProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		parent: ['supt/input-radio'],
		description: _x('', 'Block Radio', 'supt'),
		category: 'spck-form',
		postTypes: ['form'],
		attributes: {
			id: {
				type: 'string',
			},
			label: {
				type: 'string',
				default: '',
			},
			name: {
				type: 'string',
				default: '',
			},
			value: {
				type: 'string',
			},
		},
		edit: Edit,
		save: () => null,
	},
};
