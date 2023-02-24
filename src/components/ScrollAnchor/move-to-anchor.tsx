import { ReactElement, useEffect } from "react";
import { SetterOrUpdater, atom, useRecoilState } from "recoil";

import { encodeAnchorId, scrollToAnchor } from "./util";

interface StateData {
	foundAnchor: boolean;
	wantedAnchor: false | string;
	timeoutAt: false | number;
	delayTimeout: null | ReturnType<typeof setTimeout>;
	delay: number;
}

const State = atom<StateData>({
	key: "MoveToScrollAnchor",
	default: {
		foundAnchor: false,
		wantedAnchor: false,
		timeoutAt: false,

		delayTimeout: null,
		delay: 0,
	},
});

/**
 * A react component that when rendered, will cause the specified scroll anchor to be scrolled into view.
 */
export function MoveToScrollAnchor({ id, delay }: { id: string; delay?: number }): ReactElement {
	const [state, setState] = useRecoilState(State);
	if (state.wantedAnchor !== id) {
		setState(({ ...data }) => ({ ...data, wantedAnchor: id, foundAnchor: false, delay: delay ?? 0 }));
	}

	useEffect(() => {
		if (id == null) return;
		if (id !== state.wantedAnchor) return;
		if (state.foundAnchor) return;

		const anchorElementId = encodeAnchorId(id);
		const el = document.getElementById(anchorElementId);
		if (el == null) {
			// We need to wait for the anchor to scroll itself.
			return;
		}

		doMoveToScrollAnchor(id, el, state, setState);
	}, [id, state, setState]);
	return <></>;
}

export function useMaybeMoveToScrollAnchorCallback(id: string): (el: HTMLElement) => void {
	const [state, setState] = useRecoilState(State);
	return (el: HTMLElement) => {
		if (state.foundAnchor) return;
		if (state.wantedAnchor !== id) return;

		if (state.timeoutAt !== false && Date.now() >= state.timeoutAt) {
			setState(({ ...data }) => ({ ...data, foundAnchor: true }));
			return;
		}

		doMoveToScrollAnchor(id, el, state, setState);
	};
}

function doMoveToScrollAnchor(id: string, el: HTMLElement, state: StateData, setState: SetterOrUpdater<StateData>) {
	if (state.delayTimeout != null) {
		clearTimeout(state.delayTimeout);
	}

	function doScroll() {
		console.debug("Scrolling to anchor", id);
		scrollToAnchor(el);
	}

	// Immediately scroll.
	if (state.delay <= 0) {
		doScroll();
		setState(({ ...data }) => ({ ...data, delayTimeout: null, foundAnchor: true }));
		return;
	}

	// Scroll after a debounced delay.
	const timeout = setTimeout(() => {
		clearTimeout(timeout);
		setState(({ ...data }) => ({ ...data, delayTimeout: null }));
		doScroll();
	}, state.delay);

	setState(({ ...data }) => ({
		...data,
		foundAnchor: true,
		delayTimeout: timeout,
	}));
}
