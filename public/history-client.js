// ---------------------------------------------------------------------------------------------------------------------
// FrameHistory | Copyright (C) 2022 eth-p <me@eth-p.dev>
// Two scripts that allow an iframe to manipulate the parent window's history to create a "seamless" SPA experience.
// ---------------------------------------------------------------------------------------------------------------------
(() => {
	console.log("[FH] Listening for history changes from parent frame.");

	function message(type, payload) {
		window.top.postMessage({
			source: 'shared-history',
			type,
			payload,
		}, '*');
	}

	// Replace the history.pushState and history.replaceState functions.
	// These wrappers send a message to the parent window, so that it can alter its own history state.
	const pushState = history.pushState;
	history.pushState = (state, title, path, ...args) => {
		pushState.call(history, state, title, path, ...args);
		message('push', {state, title, path});
	};

	const replaceState = history.replaceState;
	history.replaceState = (state, title, path, ...args) => {
		replaceState.call(history, state, title, path, ...args);
		message('replace', {state, title, path});
	};

	// Listen for a message from the parent window.
	// If the parent pop'ed its history, then create a synthetic event and dispatch it to the embedded frame window.
	function pop(state, path) {
		// Replace the state itself.
		replaceState.call(history, state, '', path == null ? '/' : path);

		// Dispatch a synthetic 'popstate' event.
		const synthetic = new PopStateEvent('popstate');
		Object.defineProperty(synthetic, 'state', {value: state});
		window.dispatchEvent(synthetic);
	}

	window.addEventListener("message", (event) => {
		if (!(typeof event.data === 'object')) return;
		if (event.data.source !== 'shared-history') return;
		const payload = event.data.payload;

		switch (event.data.type) {
			case 'pop':
				console.log('[FH] Pop State', payload);
				pop(payload.state, payload.path);
		}
	}, false);

	window.addEventListener('popstate', e => console.log(e.state));
})();
