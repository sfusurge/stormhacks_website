import { ReactElement, useMemo, useRef, useState } from "react";

import ScrollAnchor, { getTopmostVisibleAnchor } from "~/ScrollAnchor";
import { getScrollParent, isAnimatedScrolling } from "~/ScrollAnchor/util";

/**
 * The ID of a page within a {@link Pager}.
 * This must be unique.
 */
export type PageID = string;

export interface PagerProps {
	/**
	 * Callback for whenever the active page changes.
	 * The active page is considered to be the topmost visible page.
	 *
	 * @param id The active page's ID.
	 * @param metadata The active page's metadata.
	 */
	onPageChange?: (id: PageID, metadata: any) => void;

	/**
	 * The starting page ID.
	 * This will jump to the page upon first navigate.
	 */
	startingPage?: PageID;

	/**
	 * The pages in the pager.
	 */
	pages: Array<{
		id: PageID;
		metadata: any;
		page: () => ReactElement;
	}>;
}

/**
 * A pager that combines multiple sub-pages into a single page.
 *
 * Provided that the `pages` property does not change, each of the sub-pages are memoized to prevent unnecessary
 * re-rendering.
 *
 * A callback for whenever the page changes can also be provided.
 */
function Pager({ pages, onPageChange }: PagerProps) {
	const ref = useRef(null);
	const [lastPage, setLastPage] = useState<null | string>(null);

	const pageMetadata = new Map(pages.map(({ id, metadata }) => [id, metadata]));
	const cb = () => {
		const el = ref.current;
		if (el == null) return false;

		const scrollEl = getScrollParent(el);
		if (scrollEl == null || isAnimatedScrolling(scrollEl)) {
			return;
		}

		const currentPage = getTopmostVisibleAnchor(el);
		if (currentPage != null && currentPage !== lastPage) {
			setLastPage(currentPage);
			onPageChange?.(currentPage, pageMetadata.get(currentPage));
		}

		return;
	};

	// Memoize the pages within the pager.
	// There's no need to re-render these every time.
	const memoizedPages: Array<{ id: PageID; pageEl: ReactElement }> = useMemo(
		() => pages.map(({ page: Page, id }) => ({ id, pageEl: <Page key={id} /> })),
		[pages]
	);

	// Render.
	return (
		<div ref={ref}>
			{memoizedPages.map(({ id, pageEl }) => (
				<ScrollAnchor key={id} id={id} onTop={cb}>
					{pageEl}
				</ScrollAnchor>
			))}
		</div>
	);
}

export default Pager;
