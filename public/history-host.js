// ---------------------------------------------------------------------------------------------------------------------
// FrameHistory | Copyright (C) 2022 eth-p <me@eth-p.dev>
// Two scripts that allow an iframe to manipulate the parent window's history to create a "seamless" SPA experience.
// ---------------------------------------------------------------------------------------------------------------------
(() => {
	console.log("[FH] Listening for history push/replace from child frame.");

	window.frameHistory = {
		base: '',
		rewrite: function (path) {
			if (path == null) return path;
			const base = '/' + window.frameHistory.base.toString().replace(/^\/+/, '');

			if (window.location.pathname === base && (path.startsWith('../') || path === '..')) return `${base}/`;

			if (path === '/') return `${base}/`;
			if (path.startsWith('/')) return `${base}${path}`;

			return path;
			// return `${window.frameHistory.base}/${path}`;
		},
	};

	// Listen for messages from the embedded frame.
	window.addEventListener('message', event => {
		if (!(typeof event.data === 'object')) return;
		if (event.data.source !== 'shared-history') return;
		const payload = event.data.payload;

		if (event.data.type === 'push' || event.data.type === 'replace') {
			const wrapped = {path: payload.path, state: payload.state};
			const target = window.frameHistory.rewrite(payload.path);

			switch (event.data.type) {
				case 'push':
					console.log('[FH] Push State', payload, target);
					history.pushState(wrapped, payload.title, target);
					break;

				case 'replace':
					console.log('[FH] Replace State', payload, target);
					history.replaceState(wrapped, payload.title, target);
					break;
			}
		}
	}, false);

	// Forward 'popstate' events to the embedded frame.
	window.addEventListener('popstate', event => {
		const location = {...window.location};
		for (const prop in location) {
			location[prop] = location[prop].toString();
		}

		const message = {
			source: 'shared-history',
			type: 'pop',
			payload: {
				state: event.state.state,
				path: event.state.path,
			},
		};

		for (let i = 0; i < window.frames.length; i++) {
			window.frames[i].postMessage(message, '*');
		}
	});
})();
