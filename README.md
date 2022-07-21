# StormHacks Website

The source code and development repository for [https://stormhacks.com/](https://stormhacks.com/).

<img src=".github/assets/stormhacks.svg" alt="StormHacks Logo" />

Hosted by <a href="https://sfusurge.com/"><img src=".github/assets/surge.svg" height="16" style="height: 1em; line-height: 100%" /> SFU Surge</a>.

&nbsp;

**Table of Contents:**

- [Contributing](#contributing)
   - [Setup (The Easy Way)](#setup-the-easy-way)
   - [Setup (The Hard Way)](#setup-the-hard-way)
   - [Development](#development)
   - [Workflow](#workflow)



&nbsp;

## Contributing

### Setup (The Easy Way)

<details><summary><b>MacOS / Linux</b></summary><div>

1. **Install nvm for Bash:** https://github.com/nvm-sh/nvm#installing-and-updating
2. **Run the start script.**
   ```bash
   ./start.sh
   ```

</div></details>

<details><summary><b>Windows</b></summary><div>

1. **Install PowerShell.**
2. **Install nvm for PowerShell:** https://github.com/aaronpowell/ps-nvm
3. **Run the start script.**
   ```bash
   .\start.ps1
   ```

</div></details>


### Setup (The Hard Way)

1. **Clone the repository.**  
   
   ```bash
   https://github.com/sfusurge/stormhacks_website.git
   ```
   
2. **Install `nvm` (Node Version Manager)**

   - [Bash/Zsh](https://github.com/nvm-sh/nvm)
   - [Fish Shell](https://github.com/jorgebucaran/nvm.fish)
   - [PowerShell](https://github.com/aaronpowell/ps-nvm) (Windows)

   
3. **Install development dependencies.**  
   
   ```bash
   nvm use
   npm install
   ```


### Development

Run `npm start` to open a local dev server for the StormHacks website.

### Workflow

1. **Checkout the latest `main` branch and create a feature branch.**
   
   ```bash
   git checkout main
   git pull
   git checkout -b my-feature
   ```
   
2. **Work on your changes.**  
   Make sure to periodically commit and push your changes!
   
   > **Commit Policy:**  
   > 
   > - Each commit should be buildable by itself.
   > - Each commit should (ideally) be one change.
   > - Commit messages should be descriptive. 

3. **Rebase against the latest `main`.**  
   
   ```bash
   git push
   git fetch
   git rebase origin/main
   git push --force  # DO NOT DO THIS IF MULTIPLE PEOPLE ARE WORKING ON THE BRANCH
   ```
   
   If it doesn't work, let @eth-p know and he'll fix it!
   
   Tip: You can undo a merge-conflicted rebase by running `git rebase --abort`.

4. **Open a Pull Request for your branch.**
   
   https://github.com/sfusurge/stormhacks_website/compare
   
5. **Ask another @Developer to review your Pull Request.**

   Request a review using GitHub and message the developer channel on Slack. If you need a quicker review, you can DM another developer on Discord.
   
6. **Merge your approved Pull Request.**

   Great job! Once your Pull Request is merged, it will be deployed automatically.


&nbsp;


## Archives

TODO

