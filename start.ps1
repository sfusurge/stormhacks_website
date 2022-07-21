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

# Install dependencies if node_module does not yet exist.
if (-not(Test-Path -Path "node_modules")) {
	Write-Host "Installing required dependencies..."
	if (-not(npm install)) {
		throw "Unable to install dependencies"
	}
}

# Run the start script.
npm start
