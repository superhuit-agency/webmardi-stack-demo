import {
	InnerBlocks,
	InspectorAdvancedControls,
	InspectorControls,
	PlainText,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import { IdControl, NameControl } from '#/components';
import { WpBlockEditProps, WpBlockType } from '@/typings';
import { CheckboxBlock } from '../Checkbox/edit';
import { InputCheckboxProps } from '.';
import block from './block.json';

// styles
import './styles.css';
import './styles.edit.css';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: WpBlockEditProps<InputCheckboxProps>) => {
	const { id, label, name, required } = props.attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={_x('Settings', 'Settings', 'supt')}>
					<PanelRow>
						<ToggleControl
							label={_x('Required ?', 'Required ?', 'supt')}
							checked={required}
							onChange={(required: boolean) =>
								props.setAttributes({ required })
							}
						/>
					</PanelRow>
					<PanelRow>
						<NameControl
							name={name}
							placeholder={label}
							onChange={(name) => props.setAttributes({ name })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InspectorAdvancedControls>
				<IdControl
					blockId={props.clientId.split('-')[0]}
					id={id || ''}
					name={name}
					label={label}
					onChange={(id) => props.setAttributes({ id })}
				/>
			</InspectorAdvancedControls>

			<fieldset className="supt-input-checkbox supt-input-wrapper supt-input-field">
				{!required ? (
					<span className="supt-input-checkbox__optional supt-input-field__optional">
						{_x('Optional', 'Optional', 'supt')}
					</span>
				) : null}
				<PlainText
					className="supt-input-checkbox__label supt-input-field__label"
					placeholder={_x('Label', 'Label', 'supt')}
					value={label}
					onChange={(label: string) => props.setAttributes({ label })}
					multiline="false"
				/>
				<div className="supt-input-checkbox__wrapper">
					<InnerBlocks
						allowedBlocks={[CheckboxBlock.slug]}
						template={[[CheckboxBlock.slug], [CheckboxBlock.slug]]}
						templateLock={false}
					/>
				</div>
			</fieldset>
		</>
	);
};

/**
 * WORDPRESS BLOCK
 */
export const InputCheckboxBlock: WpBlockType<InputCheckboxProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		description: _x(
			'Input Checkbox block',
			'Block Input Text description',
			'supt'
		),
		category: 'spck-form',
		postTypes: ['form'],
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
			required: {
				type: 'boolean',
				default: false,
			},
			options: {
				type: 'array',
				default: [],
			},
		},
		supports: { customClassName: false },
		edit: Edit,
		save: function () {
			return <InnerBlocks.Content />;
		},
	},
};
