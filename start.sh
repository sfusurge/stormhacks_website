#!/usr/bin/env bash
set -euo pipefail
# Initial setup script.
# This can be used instead of the instructions for simplicity.

# Use the NodeJS version specified in .nvmrc, if it exists.
# If not already downloaded, this will download NodeJS.
if [ -f ".nvmrc" ]; then
	if ! type nvm &>/dev/null; then
		if [ -f "$HOME/.nvm/nvm.sh" ]; then
			set +euo pipefail # <-- nvm doesn't like `-euo pipefail`.
			source "$HOME/.nvm/nvm.sh"
			set -euo pipefail
		else
			echo "Please install nvm (Node Version Manager):"
			echo "  https://github.com/nvm-sh/nvm#installing-and-updating"
			exit 1
		fi
	fi

	nvm use --silent 2>/dev/null || {
		echo "Installing required NodeJS version..."
		nvm install
		nvm use
	}
fi

# Install dependencies if node_module does not yet exist.
if ! [ -d "node_modules" ]; then
	echo "Installing required dependencies..."
	npm install	|| {
		echo "Unable to install dependencies"
		exit 1
	}
fi

# Run the start script.
npm start
