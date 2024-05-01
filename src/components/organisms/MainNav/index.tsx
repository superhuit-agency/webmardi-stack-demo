import { FC } from 'react';

import { Link } from '@/helpers/Link';
import { BlockConfigs } from '@/typings';

import block from './block.json';

import './styles.css';

export interface MainNavProps {}

export const MainNav: FC<MainNavProps> & BlockConfigs = () => {
	return (
		<div className="supt-main-nav">
			<div className="supt-main-nav__inner">
				<Link
					href="https://superhuit.ch"
					className="supt-main-nav__supt-link"
				>
					Superhuit
				</Link>

				<Link href="/" className="supt-main-nav__home-link">
					Demo
				</Link>
			</div>
		</div>
	);
};

MainNav.slug = block.slug;
MainNav.title = block.title;
