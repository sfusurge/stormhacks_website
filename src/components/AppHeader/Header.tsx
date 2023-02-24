import cx from "classnames";
import { AppRoute } from "src/app/Routes";

import { useEffect, useRef, useState } from "react";

import { getScrollParent, isAnimatedScrolling } from "~/ScrollAnchor/util";
import SurgeSocialLinks from "~/SurgeSocialLinks";

import Styles from "./Header.module.scss";
import HeaderApplyButton from "./HeaderApplyButton";
import HeaderNav from "./HeaderNav";

/**
 * The header for the StormHacks 2023 website.
 */
function Header({ appRoutes }: { appRoutes: AppRoute[] }) {
	const headerRef = useRef<HTMLElement>(null);

	// Register listeners for showing scroll indicators when on mobile layout.
	useEffect(() => {
		const headerEl = headerRef.current;
		if (headerEl == null) return;

		const refreshScrollableAttributes = () => {
			const isScrolledLeft = headerEl.scrollLeft <= 0;
			const isScrolledRight = headerEl.scrollLeft >= headerEl.scrollWidth - headerEl.clientWidth - 1;
			headerEl.setAttribute("data-scrollable-left", isScrolledLeft ? "no" : "yes");
			headerEl.setAttribute("data-scrollable-right", isScrolledRight ? "no" : "yes");
		};

		// Update the `data-scrollable-left` and `data-scrollable-right` attributes.
		// On mobile, these will be used to change the styles to indicate that there's more to the header.
		refreshScrollableAttributes();
		const listener = () => requestAnimationFrame(refreshScrollableAttributes);

		// Register the listener and return a function to unregister the listener.
		headerEl.addEventListener("scroll", listener, { passive: true });
		return () => headerEl.removeEventListener("scroll", listener);
	}, [headerRef]);

	// Register listeners for showing/hiding the header when scrolling on mobile.
	const [scrollInfo] = useState<ScrollListenersSharedState>({
		lastScrollY: 0,
		lastScrollAtTouch: null,
	});

	useEffect(() => {
		const headerEl = headerRef.current;
		if (headerEl == null) return;

		const scrollTarget = getScrollParent(headerEl);
		if (scrollTarget == null) return;

		const [listenTarget, getScrollY] =
			scrollTarget?.nodeName === "HTML"
				? [window, () => window.scrollY]
				: [scrollTarget, () => scrollTarget.scrollTop];

		const onTouch = createHeaderTouchCallback(headerEl, scrollTarget, getScrollY, scrollInfo);
		const onScroll = createHeaderScrollCallback(headerEl, scrollTarget, getScrollY, scrollInfo);

		listenTarget.addEventListener("touchstart", onTouch);
		listenTarget.addEventListener("scroll", onScroll);

		return () => {
			listenTarget.removeEventListener("touchstart", onTouch);
			listenTarget.removeEventListener("scroll", onScroll);
		};
	}, [headerRef, scrollInfo]);

	return (
		<header className={Styles.header} ref={headerRef} id="header">
			<div className={cx(Styles.headerContents, "width-limited")}>
				<HeaderNav appRoutes={appRoutes} />
				<div className={Styles.spacer} />
				<div className={cx(Styles.linkContainer, Styles.socialLinks)}>
					<SurgeSocialLinks className={Styles.iconLink} />
				</div>
				<HeaderApplyButton />
			</div>
		</header>
	);
}

type ScrollListenersSharedState = {
	lastScrollY: number;
	lastScrollAtTouch: number | null;
};

function createHeaderScrollCallback(
	el: HTMLElement,
	scrollEl: HTMLElement,
	getScrollY: () => number,
	state: ScrollListenersSharedState
): () => void {
	let queueId = 0;
	let scrollDelta = 0;

	return () => {
		const scrollY = getScrollY();
		const isAnimating = isAnimatedScrolling(scrollEl);

		const myQueueId = ++queueId;
		window.requestAnimationFrame(() => {
			// Debounce.
			if (myQueueId !== queueId) return;
			const { lastScrollY } = state;
			state.lastScrollY = scrollY;

			// Apply classes.
			el.setAttribute("data-scrolling", scrollY >= state.lastScrollY ? "down" : "up");
			el.classList.toggle(Styles.forceVisible, isAnimating);
			el.classList.toggle(Styles.atContainerTop, scrollY <= 0);

			// Stop if animating.
			if (isAnimating) {
				if (state.lastScrollAtTouch != null) {
					state.lastScrollAtTouch = scrollY;
					scrollDelta = 0;
				}

				return;
			}

			// If on mobile and a touch event has been received, hide/show the header.
			if (state.lastScrollAtTouch !== null) {
				const headerHeight = el.clientHeight;
				const oldDelta = scrollDelta;
				let newDelta = oldDelta + (scrollY - lastScrollY);

				scrollDelta = Math.max(Math.min(newDelta, headerHeight), -headerHeight);
				el.style.setProperty("--header-hide-offset", `${scrollDelta}px`);
			}
		});
	};
}

function createHeaderTouchCallback(
	_el: HTMLElement,
	_scrollEl: HTMLElement,
	getScrollY: () => number,
	state: ScrollListenersSharedState
): () => void {
	return () => {
		state.lastScrollAtTouch = getScrollY();
	};
}

export default Header;
