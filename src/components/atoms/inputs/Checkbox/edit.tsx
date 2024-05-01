import { InspectorAdvancedControls, RichText } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import { IdControl } from '#/components';
import { WpBlockType } from '@/typings';
import block from './block.json';
import { CheckboxProps } from '.';

// styles
import './styles.css';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: BlockEditProps<CheckboxProps>) => {
	const { name, label, id, value } = props.attributes;

	return (
		<>
			{/* Settings Sidebar */}
			<InspectorAdvancedControls>
				<TextControl
					label={_x('Value', 'Value', 'supt')}
					placeholder={label}
					value={value || ''}
					onChange={(value: string) => props.setAttributes({ value })}
					help={_x(
						'This is what will show in the form results if the checkbox is checked.',
						'Checkbox',
						'supt'
					)}
				/>
				<IdControl
					blockId={props.clientId.split('-')[0]}
					id={id || ''}
					name={name}
					label={label}
					onChange={(id) => props.setAttributes({ id })}
				/>
			</InspectorAdvancedControls>

			{/* Block Editor */}

			<div className="supt-checkbox">
				<input type="checkbox" className="supt-checkbox__input" />
				<RichText
					className="supt-checkbox__label"
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
export const CheckboxBlock: WpBlockType<CheckboxProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		parent: ['supt/input-checkbox'],
		description: _x('', 'Block Checkbox', 'supt'),
		category: 'spck-form',
		attributes: {
			id: {
				type: 'string',
			},
			label: {
				type: 'string',
			},
			name: {
				type: 'string',
			},
			value: {
				type: 'string',
			},
		},
		edit: Edit,
		save: () => null,
	},
};
