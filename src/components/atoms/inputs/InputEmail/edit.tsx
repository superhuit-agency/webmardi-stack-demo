import {
	InspectorAdvancedControls,
	InspectorControls,
	PlainText,
} from '@wordpress/block-editor';
import { BlockEditProps, createBlock } from '@wordpress/blocks';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';
import { useRef } from '@wordpress/element';
import { _x } from '@wordpress/i18n';

import { IdControl, NameControl } from '#/components';
import { WpBlockType } from '@/typings';
import block from './block.json';
import { InputEmailProps } from '.';

// styles
import './styles.css';
import './styles.edit.css';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: BlockEditProps<InputEmailProps>) => {
	const { name, label, required, id, placeholder } = props.attributes;
	const refEl = useRef(null);

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

			<div
				className="supt-input-email supt-input-wrapper supt-input-field"
				ref={refEl}
			>
				{!required ? (
					<span className="supt-input-field__optional supt-input-email__optional">
						{_x('Optional', 'Optional', 'supt')}
					</span>
				) : null}
				<PlainText
					className="supt-input-email__label supt-input-field__label"
					placeholder={_x('Label', 'Label', 'supt')}
					value={label}
					onChange={(label: string) => props.setAttributes({ label })}
				/>
				<PlainText
					className="supt-input-email__input supt-input-field__input"
					placeholder={_x('Add a placeholder', 'Placeholder', 'supt')}
					value={placeholder}
					onChange={(placeholder: string) =>
						props.setAttributes({ placeholder })
					}
				/>
			</div>
		</>
	);
};

/**
 * WORDPRESS BLOCK
 */
export const InputEmailBlock: WpBlockType<InputEmailProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		description: _x(
			'Simple email input.',
			'Block Input Email description',
			'supt'
		),
		category: 'spck-form',
		postTypes: ['form'],
		transforms: {
			to: [
				{
					type: 'block',
					blocks: ['supt/input-text'],
					transform: (attributes: object) => {
						return createBlock('supt/input-text', attributes);
					},
				},
				{
					type: 'block',
					blocks: ['supt/input-textarea'],
					transform: (attributes: object) => {
						return createBlock('supt/input-textarea', attributes);
					},
				},
			],
		},
		attributes: {
			id: { type: 'string' },
			label: { type: 'string' },
			name: { type: 'string' },
			placeholder: { type: 'string' },
			required: { type: 'boolean', default: false },
		},
		// keywords: [__('email'),	__('email'),	__('date')],
		supports: { customClassName: false },

		edit: Edit,
		save: () => null,
	},
};
