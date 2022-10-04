# Initial setup script.
# This can be used instead of the instructions for simplicity.

# Use the NodeJS version specified in .nvmrc, if it exists.
# If not already downloaded, this will download NodeJS.
if (Test-Path -Path ".nvmrc" -PathType Leaf) {
	try { Set-NodeVersion } catch {
		Write-Host "Installing required NodeJS version..."
		Install-NodeVersion
		Set-NodeVersion
	}
}

# Log in to the GitHub Packages registry.
$user_home = if ($IsWindows) { $env:USERPROFILE } else { $env:HOME }
if (
	( -not(Test-Path -Path "$user_home/.npmrc") ) -or
	( -not(Select-String -Path "$user_home/.npmrc" -Pattern "//npm.pkg.github.com/:_authToken=") )
) {
	Write-Host "`n`e[34mYou need to log in to the GitHub Packages registry.`e[0m"
	Write-Host "Please visit `e[34mhttps://github.com/settings/tokens`e[0m and generate a personal access token to use as your password."

	npm login --registry="https://npm.pkg.github.com"
}

# Install dependencies if node_module does not yet exist.
if (-not(Test-Path -Path "node_modules")) {
	Write-Host "Installing required dependencies..."
	if (-not(npm install)) {
		throw "Unable to install dependencies"
	}
}

# Run the start script.
npm start
