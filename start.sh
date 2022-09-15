#!/usr/bin/env bash
set -euo pipefail
# Initial setup script.
# This can be used instead of the instructions for simplicity.

# Remove the prefix from .npmrc temporarily.
if [ -f "$HOME/.npmrc" ]; then
	if grep "^prefix=" "$HOME/.npmrc" &>/dev/null; then
		echo "Your .npmrc file has a prefix. It will be removed while this script is running."

		# Create a backup of the .npmrc file.
		cp "$HOME/.npmrc" "$HOME/.npmrc.if_i_exist_replace_original_with_me"
		trap 'mv "$HOME/.npmrc.if_i_exist_replace_original_with_me" "$HOME/.npmrc"' EXIT

		# Remove the prefix from the original .npmrc file.
		grep -v "^prefix=" \
			< "$HOME/.npmrc.if_i_exist_replace_original_with_me" \
			> "$HOME/.npmrc"
	fi
fi

# Use the NodeJS version specified in .nvmrc, if it exists.
# If not already downloaded, this will download NodeJS.
if [ -f ".nvmrc" ]; then
	if ! type nvm &>/dev/null; then
		nvm_locations=(
			"$HOME/.nvm/nvm.sh"
			"/usr/local/share/nvm/init-nvm.sh"
			"/usr/share/nvm/init-nvm.sh"
		)

		for loc in "${nvm_locations[@]}"; do
			if [ -f "$loc" ]; then
				set +euo pipefail # <-- nvm doesn't like `-euo pipefail`.
				source "$loc"
				set -euo pipefail
				break
			fi
		done

		if ! type nvm &>/dev/null; then
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
