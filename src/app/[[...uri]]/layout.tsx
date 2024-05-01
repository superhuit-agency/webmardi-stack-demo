import { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';

import { FooterDataType } from '@/components/organisms/Footer';
import { MainNavProps } from '@/components/organisms/MainNav';
import { getWpUriFromNextPath, getAllMenus } from '@/lib';

import '@/css/base/index.css';

export const revalidate = 3600; // revalidate the data at most every hour

// Fonts
const manrope = Manrope({
	weight: ['400', '500'],
	variable: '--font-primary',
	subsets: ['latin'],
});

// Metas
export const viewport: Viewport = {
	themeColor: '#ffffff',
	initialScale: 1,
	width: 'device-width',
};

export const metadata: Metadata = {
	manifest: '/manifest.webmanifest',
	// Icons
	// File based api : more info https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
};

export default async function Layout({
	params,
	children,
}: {
	children: React.ReactNode;
	params: { uri: string[] };
}) {
	const menus: MainNavProps & FooterDataType = await getAllMenus();

	const uri = getWpUriFromNextPath(
		params.uri ?? []
		// params.lang,
		// defaultLocale
	);

	const languageCode = 'FR'; // TODO: get from next i18n

	return (
		<html lang={languageCode} className={`${manrope.variable}`}>
			<body>
				<div className="app">
					<div className="main">
						{/* <MainNav /> */}
						<div>{children}</div>
						{/* <Footer
							{...menus}
							isHome={
								uri === '/' ||
								uri === `/${languageCode.toLowerCase()}/`
							}
						/> */}
					</div>
				</div>
			</body>
		</html>
	);
}
