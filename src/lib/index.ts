import fetchAPI from './fetch-api';
import formatBlocksJSON from './format-blocks-json';
import formatMenuItems from './format-menu-items';

import getBlockFinalComponentProps from './get-block-final-component-props';
// import get404PageTemplateContent from './get-404-page-template-content';
import getAllURIs from './get-all-uris';
import { getAllMenus } from './get-all-menus';
import getAuthToken from './get-auth-token';

import getFunkyWpUploadsURI from './get-funky-wp-uploads-uri';
// import getGdprConfigs from './get-gdpr-configs';
// import getLocales from './get-locales';
import getNodeByURI from './get-node-by-uri';
import getWpUriFromNextPath from './get-wp-uri-from-next-path';

import getPreviewNode from './get-preview-node';
import getSitemapData from './get-sitemap-data';

// import getThemeGeneralSettings from './get-theme-general-settings';
// import getTranslationStrings from './get-translation-strings';

import getRedirection from './get-redirection';

// export const PUBLIC_STATI = ['PUBLISH'];
export const PREVIEW_STATI = ['PUBLISH', 'DRAFT', 'FUTURE', 'PRIVATE'];

export {
	fetchAPI,
	formatMenuItems,
	formatBlocksJSON,
	// get404PageTemplateContent,
	getAllMenus,
	getAllURIs,
	getAuthToken,
	getBlockFinalComponentProps,
	getFunkyWpUploadsURI,
	// getGdprConfigs,
	// getLocales,
	getNodeByURI,
	getPreviewNode,
	getSitemapData,
	// getThemeGeneralSettings,
	// getTranslationStrings,
	getRedirection,
	getWpUriFromNextPath,
};
