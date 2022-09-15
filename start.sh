#!/usr/bin/env bash
set -euo pipefail
# Initial setup script.
# This can be used instead of the instructions for simplicity.

# Remove the prefix from .npmrc temporarily.
if [ -f "$HOME/.npmrc" ]; then

	# Check if there was a leftover .npmrc backup from this script.
	if [ -f "$HOME/.npmrc.if_i_exist_replace_original_with_me" ]; then
		diff_from_original="$(
			{ diff -d "$HOME/.npmrc" "$HOME/.npmrc.if_i_exist_replace_original_with_me" || true; } \
			| grep '^> \|^< '
		)"

		if [ $(wc -l <<< "$diff_from_original") -eq 1 ] && grep '^> prefix=' <<< "$diff_from_original" &>/dev/null; then
			mv "$HOME/.npmrc.if_i_exist_replace_original_with_me" "$HOME/.npmrc"
		else
			echo "error: It appears that this script did not exit cleanly last time." 1>&2
			echo "       Please restore your ~/.npmrc from ~/.npmrc.if_i_exist_replace_original_with_me" 1>&2
			exit 10
		fi
	fi

	# Check if .npmrc contains a prefix change.
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

# Function to get a checksum of the dependencies.
get_dependency_checksum() {
	local dependencies
	dependencies="$(cat package.json)"

	# If jq is installed, we can extract the dependencies specifically.
	if command -v jq &>/dev/null; then
		dependencies="$(jq '
			.dependencies + .devDependencies
				| to_entries
				| sort_by(.key)
				| unique_by(.key)
				| from_entries
		' <<< "$dependencies")"
	fi

	# Generate a checksum of the dependencies.
	if command -v sha256sum &>/dev/null; then
		sha256sum <<< "$dependencies" | cut -d' ' -f1
		return $?
	fi

	shasum -a 256 <<< "$dependencies" | cut -d' ' -f1
	return $?
}

# Install dependencies if node_modules is outdated/not installed.
dependencies_need_updating=false
if ! [ -d "node_modules" ] || ! [ -f ".dependencies.sha256" ]; then
	dependencies_need_updating=true
	echo "Installing required dependencies..."
fi

if ! "$dependencies_need_updating" && [ "$(get_dependency_checksum)" != "$(cat .dependencies.sha256)" ]; then
	dependencies_need_updating=true
	echo "Installing updated dependencies..."
fi

if "$dependencies_need_updating"; then
	npm install	|| {
		echo "Unable to install dependencies"
		exit 1
	}

	get_dependency_checksum > .dependencies.sha256
fi

# Run the start script.
npm start
