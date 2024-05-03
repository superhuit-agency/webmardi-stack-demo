import { FC, HTMLProps, ReactNode } from 'react';
// internal imports
import { BlockConfigs } from '@/typings';
import { CardGift } from '../cards/CardGift';
import block from './block.json';
// styles
import './styles.css';

/**
 * TYPINGS
 */
export interface SectionGiftsProps extends HTMLProps<HTMLDivElement> {
	title: string;
	description: string;
	children?: ReactNode;
	gifts?: any;
	queryVars?: any;
}

/**
 * COMPONENT
 */
export const SectionGifts: FC<SectionGiftsProps> & BlockConfigs = ({
	title,
	description,
	children,
	gifts, // Dynamically fetched props by GraphQL query
}) => {
	return (
		<div className="supt-section-gifts">
			<div className="supt-section-gifts__inner">
				<div>
					<h2>{title}</h2>
					<div>
						<p>{description}</p>
						<div>{children}</div>
					</div>
				</div>

				<div>
					{gifts?.nodes.map((gift: any) => (
						<CardGift
							key={gift.id}
							title={gift.title}
							image={{
								src: gift.featuredImage.node.sourceUrl,
								width: gift.featuredImage.node.mediaDetails
									.width,
								height: gift.featuredImage.node.mediaDetails
									.height,
								alt: gift.title,
							}}
							category={gift.giftCategories.nodes[0].name}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

SectionGifts.slug = block.slug;
SectionGifts.title = block.title;
