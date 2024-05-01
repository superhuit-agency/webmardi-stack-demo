import { useMemo } from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Spinner, TextControl } from '@wordpress/components';
import { _x } from '@wordpress/i18n';

import { PreviewBlockImage, SectionEdit, ButtonEdit } from '#/components';
import { useGraphQlApi } from '#/hooks';

import { CardNews, CardNewsProps } from '@/components/molecules/cards/CardNews';
import EditNewsControls from './EditNewsControls';

import { WpBlockEditProps, WpBlockType } from '@/typings';

// Data
import { SectionNewsProps } from '.';
import block from './block.json';
import { getData } from './data';

// styles
import './styles.css';
import './styles.edit.css';

declare global {
	interface Window {
		pll_block_editor_plugin_settings: any;
	}
}

/**
 * COMPONENT EDIT
 */
const Edit = (props: WpBlockEditProps<SectionNewsProps>) => {
	const slug = props.name;

	const {
		uptitle,
		title,
		introduction,
		queryVars = {},
		postLinkLabel,
		seeAllLink,
	} = props.attributes;

	const variables = useMemo(() => ({ queryVars }), [queryVars]);

	const {
		isLoading,
		data: { posts },
	} = useGraphQlApi(getData, variables);

	// For block preview
	if (slug && props.attributes.isPreview)
		return <PreviewBlockImage slug={slug} />;

	return (
		<>
			<InspectorControls>
				{/* Controls */}
				<EditNewsControls
					vars={queryVars}
					onChange={(queryVars: object) =>
						props.setAttributes({ queryVars })
					}
				/>

				<PanelBody title={_x('Information', 'Panel title', 'supt')}>
					<TextControl
						label={_x(
							'Article link label',
							'Article link label',
							'supt'
						)}
						value={props.attributes.postLinkLabel || ''}
						onChange={(postLinkLabel: string) =>
							props.setAttributes({ postLinkLabel })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<section className="supt-section supt-section-news">
				<div className="supt-section__inner">
					<div className="supt-section__headline">
						<SectionEdit.Uptitle
							attribute={uptitle || ''}
							onChange={(uptitle: string) =>
								props.setAttributes({ uptitle })
							}
						/>
						<SectionEdit.Title
							attribute={title || ''}
							onChange={(title: string) =>
								props.setAttributes({ title })
							}
						/>
						<SectionEdit.Introduction
							attribute={introduction || ''}
							onChange={(introduction: string) =>
								props.setAttributes({ introduction })
							}
						/>
					</div>
					<div className="supt-section__content">
						{isLoading || !posts?.length ? (
							<p className="supt-section-news__placeholder">
								{isLoading ? (
									<Spinner />
								) : (
									_x(
										'Oups, looks like there is no news to show.',
										'Section news edit',
										'supt'
									)
								)}
							</p>
						) : (
							<div className="supt-section__list">
								{posts.map(
									(post: CardNewsProps, index: number) => (
										<CardNews
											key={index}
											linkLabel={postLinkLabel}
											{...post}
										/>
									)
								)}
							</div>
						)}

						<div className="supt-section__link-wrapper">
							<ButtonEdit
								attrs={seeAllLink}
								onChange={(attrs: object) =>
									props.setAttributes({
										seeAllLink: attrs,
									})
								}
								placeholder={_x(
									'See all news',
									'Button Placeholder',
									'supt'
								)}
								isSelected={props.isSelected}
								toolbarPosition="left"
								wrapperClass="supt-section__link-inner"
								rootClass="supt-section__link"
								linkSettings={{ settings: [] }}
								inBlockControls={false}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

/**
 * WORDPRESS BLOCK
 */
export const SectionNewsBlock: WpBlockType<SectionNewsProps> = {
	slug: block.slug,
	settings: {
		title: block.title,
		description: _x('', 'Block description', 'supt'),
		category: 'spck-content',
		// postTypes: ['page'],
		supports: {
			anchor: true,
		},
		attributes: {
			anchor: {
				type: 'string',
			},
			title: {
				type: 'string',
			},
			uptitle: {
				type: 'string',
			},
			introduction: {
				type: 'string',
			},
			queryVars: {
				type: 'object',
				default: {},
			},
			postLinkLabel: {
				type: 'string',
				default: 'Read',
			},
			seeAllLink: {
				type: 'object',
				default: {
					title: 'See all news',
					href: '',
				},
			},
			isPreview: {
				type: 'boolean',
				default: false,
			},
			posts: {
				type: 'array',
				default: [],
			},
		},
		example: {
			viewportWidth: 1280,
			attributes: {
				isPreview: true,
			},
		} as any,
		edit: Edit,
		save: () => null,
	},
};
