import apiFetch from '@wordpress/api-fetch';
import { InspectorControls } from '@wordpress/block-editor';
import { BlockEditProps } from '@wordpress/blocks';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { _x } from '@wordpress/i18n';
import { useMemo } from 'react';

import icon from '@/components/icons/FormIcon';

import { WpBlockType } from '@/typings';

import { Form, FormProps } from '.';
import block from './block.json';

type FormType = {
	id: number;
	title: string;
	strings: any;
	fields: any;
};

/**
 * COMPONENT EDIT
 */
const Edit = (props: BlockEditProps<FormProps>) => {
	const [forms, setForms] = useState([]);
	const [didFetch, setDidFetch] = useState(false);

	useEffect(() => {
		apiFetch({ path: '/wp/v2/form' }).then((results: unknown) => {
			setForms(
				(results as any).map((item: any) => ({
					id: item.id,
					title: item.title.rendered,
					strings: item.strings,
					fields: item.fields,
				}))
			);
			setDidFetch(true);
		});
	}, []);

	const { id } = props.attributes;
	const noFormAvailable = forms.length === 0;

	const form = useMemo(() => {
		return id ? forms.find((f: FormType) => f.id === id) : false;
	}, [id, forms]);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={_x('Settings', 'Form block settings', 'supt')}
				>
					{didFetch && (
						<>
							<PanelRow>
								{noFormAvailable && (
									<strong>
										{_x(
											'⚠️ No form exists. Please create one in "Forms > Add New".',
											'Form block settings',
											'supt'
										)}
									</strong>
								)}
								{!noFormAvailable && (
									<SelectControl
										label={_x(
											'Form',
											'Form block settings',
											'supt'
										)}
										value={id?.toString()}
										options={
											[
												{
													value: null,
													label: _x(
														'Pick a form',
														'Form block settings',
														'supt'
													),
												},
												...forms.map((f: FormType) => ({
													value: f.id,
													label: f.title,
												})),
											] as any
										}
										onChange={(value: string) => {
											const id = parseInt(value);

											props.setAttributes({
												id: isNaN(id) ? undefined : id,
											});
										}}
									/>
								)}
							</PanelRow>
						</>
					)}
				</PanelBody>
			</InspectorControls>

			<div className="form-block">
				{form ? (
					<Form {...(form as any)} />
				) : (
					<div className="components-placeholder">
						<div className="components-placeholder__label">
							<span className="editor-block-icon block-editor-block-icon has-colors">
								{icon}
							</span>
							{_x('Form', 'Form block settings', 'supt')}
						</div>
						<div className="components-placeholder__instructions">
							{_x(
								'Please choose the form you want to display, in the right panel.',
								'Form block settings',
								'supt'
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

/**
 * WORDPRESS BLOCK
 */
export const FormBlock: WpBlockType<FormProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		description: _x('', 'Block Form Description', 'supt'),
		category: 'common',
		// postTypes: ['page'],
		attributes: {
			id: {
				type: 'number',
				default: undefined,
			},
			fields: {
				type: 'object',
				default: {},
			},
			opt_ins: {
				type: 'boolean',
				default: false,
			},
		},
		keywords: [],
		supports: { customClassName: false },
		edit: Edit,
		save: () => null,
	},
};
