import cx from 'classnames';
import { FC } from 'react';

import { BlockConfigs, ButtonProps, LinkProps } from '@/typings';
import { Link } from '@/helpers/Link';

import block from './block.json';

// styles
import './styles.css';

export const Button: FC<ButtonProps> & BlockConfigs = ({
	title = '',
	className,
	variant = 'primary',
	...props
}) => {
	return title ? (
		<Link
			className={cx('supt-button', `-${variant}`, className)}
			{...(props as any)}
		>
			<span className="supt-button__inner">
				<span>{title}</span>
			</span>
		</Link>
	) : null;
};

Button.slug = block.slug;
Button.title = block.title;
