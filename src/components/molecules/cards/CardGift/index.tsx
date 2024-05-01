import { FC, HTMLProps } from 'react';
// internal imports
import { BlockConfigs, ImageProps } from '@/typings';
import { Image } from '../../Image';
import block from './block.json';
// styles
import './styles.css';

/**
 * TYPINGS
 */
export interface CardGiftProps extends HTMLProps<HTMLDivElement> {
	image: ImageProps;
	title: string;
	category: string;
}

/**
 * COMPONENT
 */
export const CardGift: FC<CardGiftProps> & BlockConfigs = ({
	title,
	image,
	category,
}) => {
	return (
		<div className="supt-card-gift">
			<div className="supt-card-gift__inner">
				<div className="supt-card-gift__image">
					<Image {...image} alt={image?.alt ?? title} />
				</div>
				<div className="supt-card-gift__content">
					<h4>{title}</h4>
					<p>{category}</p>
				</div>
			</div>
		</div>
	);
};

CardGift.slug = block.slug;
CardGift.title = block.title;
