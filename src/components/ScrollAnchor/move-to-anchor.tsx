import { ReactElement } from "react";

import { encodeAnchorId, scrollToAnchor } from "./util";

interface StateData {
	foundAnchor: boolean;
	wantedAnchor: false | string;
	timeoutAt: false | number;
	delayTimeout: null | ReturnType<typeof setTimeout>;
	delay: number;
}

const State: StateData = {
	foundAnchor: false,
	wantedAnchor: false,
	timeoutAt: false,
	delayTimeout: null,
	delay: 0,
};

type MoveToScrollAnchorFunction = (id: string, options?: { delay?: number }) => void;

/**
 * A React hook that allows for moving to a scroll anchor.
 */
export function useMoveToScrollAnchor(): MoveToScrollAnchorFunction {
	return (id, opts) => {
		if (State.wantedAnchor !== id) {
			Object.assign(State, {
				wantedAnchor: id,
				foundAnchor: false,
				delay: opts?.delay ?? 0,
			});
		}

		if (id == null) return;
		if (State.foundAnchor) return;

		const anchorElementId = encodeAnchorId(id);
		const el = document.getElementById(anchorElementId);
		if (el == null) {
			// We need to wait for the anchor to scroll itself.
			return;
		}

		doMoveToScrollAnchor(id, el);
	};
}

/**
 * A react component that when rendered, will cause the specified scroll anchor to be scrolled into view.
 */
export function MoveToScrollAnchor({ id, delay }: { id: string; delay?: number }): ReactElement {
	const moveToScrollAnchor = useMoveToScrollAnchor();
	moveToScrollAnchor(id, { delay });
	return <></>;
}

export function useMaybeMoveToScrollAnchorCallback(id: string): (el: HTMLElement) => void {
	return (el: HTMLElement) => {
		if (State.foundAnchor) return;
		if (State.wantedAnchor !== id) return;
		State.foundAnchor = true;

		if (State.timeoutAt === false || Date.now() < State.timeoutAt) {
			doMoveToScrollAnchor(id, el);
		}
	};
}

function doMoveToScrollAnchor(id: string, el: HTMLElement) {
	State.foundAnchor = true;
	if (State.delayTimeout != null) {
		clearTimeout(State.delayTimeout);
	}

	function doScroll() {
		const onEndScroll = () => {
			State.wantedAnchor = State.wantedAnchor === id ? false : State.wantedAnchor;
		};

		console.debug("Scrolling to anchor", id);
		scrollToAnchor(el, {
			onScrollCancel: onEndScroll,
			onScrollFinish: onEndScroll,
		});
	}

	// Immediately scroll.
	if (State.delay <= 0) {
		doScroll();
		Object.assign(State, { delayTimeout: null, foundAnchor: true });
		return;
	}

	// Scroll after a debounced delay.
	State.delayTimeout = setTimeout(() => {
		State.delayTimeout = null;
		State.delay = 0;
		doScroll();
	}, State.delay);
}
