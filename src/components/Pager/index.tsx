import { ReactElement, useMemo, useRef, useState } from "react";

import ScrollAnchor, { getTopmostVisibleAnchor } from "~/ScrollAnchor";
import { getScrollParent, isAnimatedScrolling } from "~/ScrollAnchor/util";

export interface PagerProps {
	onPageChange?: (path: string) => void;
	pages: Array<{
		path: string;
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

	const cb = () => {
		const el = ref.current;
		if (el == null) return;

		const scrollEl = getScrollParent(el);
		if (scrollEl == null || isAnimatedScrolling(scrollEl)) {
			return;
		}

		const currentPage = getTopmostVisibleAnchor(el);
		if (currentPage != null && currentPage !== lastPage) {
			setLastPage(currentPage);
			onPageChange?.(currentPage);
		}
	};

	// Memoize the pages within the pager.
	// There's no need to re-render these every time.
	const memoizedPages: Array<[string, ReactElement]> = useMemo(
		() => pages.map(({ page: Page, path }) => [path, <Page key={path} />]),
		[pages]
	);

	// Render.
	return (
		<div ref={ref}>
			{memoizedPages.map(([path, el]) => (
				<ScrollAnchor key={path} id={path} onVisible={cb} onHidden={cb}>
					{el}
				</ScrollAnchor>
			))}
		</div>
	);
}

export default Pager;
