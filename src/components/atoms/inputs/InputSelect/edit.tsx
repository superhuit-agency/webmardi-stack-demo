import {
	InspectorAdvancedControls,
	InspectorControls,
	PlainText,
} from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import {
	PanelBody,
	PanelRow,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import { useRef } from '@wordpress/element';
import { _x } from '@wordpress/i18n';

import { IdControl, NameControl } from '#/components';
import { WpBlockType } from '@/typings';
import block from './block.json';
import { InputSelectProps } from '.';

// styles
import './styles.css';
import './styles.edit.css';

/**
 * COMPONENT EDITOR
 */
const Edit = (props: BlockEditProps<InputSelectProps>) => {
	const {
		name,
		label,
		required,
		id = '',
		placeholder,
		options,
	} = props.attributes;
	const refEl = useRef(null);

	return (
		<>
			{/* Settings Sidebar */}
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
					<PanelRow>
						<TextareaControl
							label="Options"
							value={
								typeof options === 'string'
									? options
									: options
											?.map(
												(option) =>
													`${option.value}:${option.label}`
											)
											.join(';')
							}
							help={_x(
								'List of values and names (value: name; ...). Ex.: blue: Blue; red: Red; orange: Orange',
								'Description',
								'supt'
							)}
							onChange={(options: string) =>
								props.setAttributes({
									options: options,
								})
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InspectorAdvancedControls>
				<IdControl
					blockId={props.clientId.split('-')[0]}
					id={id}
					name={name}
					label={label}
					onChange={(id) => props.setAttributes({ id })}
				/>
			</InspectorAdvancedControls>

			{/* Block Editor */}
			<div
				className="supt-input-select supt-input-wrapper supt-input-field"
				ref={refEl}
			>
				<div className="supt-input-select__inner">
					{!required ? (
						<span className="supt-input-select__optional supt-input-field__optional">
							{_x('Optional', 'Optional', 'supt')}
						</span>
					) : null}
					<PlainText
						className="supt-input-select__label supt-input-field__label"
						placeholder={_x('Label', 'Label', 'supt')}
						value={label}
						onChange={(label: string) =>
							props.setAttributes({ label })
						}
					/>
					<PlainText
						className="supt-input-select__input supt-input-field__input"
						placeholder={_x(
							'Add a placeholder',
							'Placeholder',
							'supt'
						)}
						value={placeholder}
						onChange={(placeholder: string) =>
							props.setAttributes({ placeholder })
						}
					/>
					<div className="supt-input-select__indicators">
						<span className="supt-input-select__indicator-separator"></span>
						<svg viewBox="0 0 13 8" width="13" height="8">
							<path
								fill="none"
								fillRule="evenodd"
								stroke="#0D2743"
								strokeWidth="1.6"
								d="m11.5 1.5-5 5-5-5"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
};

/**
 * WORDPRESS BLOCK
 * */
export const InputSelectBlock: WpBlockType<InputSelectProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		description: _x(
			'Input Select',
			'Block Input Select description',
			'supt'
		),
		category: 'spck-form',
		postTypes: ['form'],
		attributes: {
			options: {
				type: 'string',
			},
			id: { type: 'string' },
			label: { type: 'string' },
			name: { type: 'string' },
			placeholder: { type: 'string' },
			required: { type: 'boolean', default: false },
		},
		edit: Edit,
		save: () => null,
	},
};
