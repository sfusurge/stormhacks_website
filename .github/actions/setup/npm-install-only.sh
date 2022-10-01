#!/usr/bin/env bash
# Move the real package.json so it doesn't install everything.
if ! test -f _package.json; then
    mv package.json _package.json
    mv package-lock.json _package-lock.json
fi

# Extract the exact versions from the package.json file.
packages=()
for name in "$@"; do
    packages+=( "${name}@$(jq -r '.dependencies[$p].version' --arg p "$name" _package-lock.json )" )
done

# Install them.
npm install "${packages[@]}"
