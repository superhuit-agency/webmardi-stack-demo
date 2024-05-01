'use client';

import cx from 'classnames';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useState } from 'react';

import './styles.css';

interface PreviewToolbarProps {
	preview: boolean;
	isDraft: boolean;
	wpUrl: string;
	editLink?: string;
	token: string;
}

export function PreviewToolbar({
	preview,
	isDraft,
	wpUrl,
	editLink,
	token,
}: PreviewToolbarProps) {
	const [viewport, setViewport] = useState<{ w: number; h: number }>();
	const [isDraftPreview, setIsDraftPreview] = useState(isDraft);

	const getViewportSizes = useCallback(
		() => ({
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight,
		}),
		[]
	);

	/**
	 * Debounced resize handler
	 * to limit number of viewport size
	 * state changes and improve perfs
	 */
	const debouncedResize = useCallback(
		() => debounce(() => setViewport(getViewportSizes()), 100),
		[getViewportSizes]
	);

	useEffect(() => {
		setViewport(getViewportSizes());
		window.addEventListener('resize', debouncedResize);
		return () => window.removeEventListener('resize', debouncedResize);
	}, [getViewportSizes, debouncedResize]);

	const toggleIsDraftPreview = useCallback(() => {
		const newUrl = [wpUrl];
		let url = `${newUrl.join('/')}/`;
		if (isDraftPreview) {
			setIsDraftPreview(false);
			url = `${url}?preview=true&token=${token}`;
		} else {
			setIsDraftPreview(true);
			url = `${url}?preview-draft=true&token=${token}`;
		}

		window.location.assign(url);
	}, [isDraftPreview, wpUrl, token]);

	if (!preview) return null;

	return (
		<div className={cx('supt-preview-toolbar')}>
			<p>This page is a preview.</p>

			<label className="supt-preview-toolbar__checkbox">
				<input
					type="checkbox"
					id="preview_current_page"
					checked={!isDraftPreview}
					onChange={toggleIsDraftPreview}
					disabled={wpUrl?.includes('?page_id=')}
				/>
				Switch to current page
			</label>

			<p className="supt-preview-toolbar__screen">
				Screen width:{' '}
				<span>{`${
					viewport?.w ? `${viewport?.w}px` : 'Calulating...'
				}`}</span>
			</p>

			{editLink && (
				<a
					href={decodeURI(editLink).replace('&amp;', '&')}
					className="supt-preview-toolbar__button"
				>
					Back to editor
				</a>
			)}
		</div>
	);
}
