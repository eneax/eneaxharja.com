---
title: 'MacBook setup for web development'
date: '2022-04-09'
description: 'How I setup my MacBook for web development.'
tags: ['config']
---

My MacBook setup for web development includes tools like: [Homebrew](https://brew.sh), [Google Chrome](https://www.google.com/chrome), [Visual Studio Code](https://code.visualstudio.com), [Hyper](https://hyper.is) with [Oh My Zsh](https://ohmyz.sh), [Git](https://git-scm.com), [Node](https://nodejs.org)/[npm](https://www.npmjs.com) and [ESLint](https://eslint.org).

### Homebrew

Install Homebrew as a package manager for macOS:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Update everything in Homebrew to the latest version:

```shell
brew update
```

Install GUI applications ([Homebrew formulae](https://formulae.brew.sh)):

```shell
brew install --cask \
  google-chrome  \
  firefox \
  hyper \
  visual-studio-code \
  figma \
  mjml \
  deepl \
  vlc
```

Install terminal applications:

```shell
brew install \
  git \
  nvm
```

### GUI applications

**Google Chrome** (web dev browser): login with personal Gmail account and import preferences.

**Visual Studio Code** (web dev IDE): login with personal GitHub account and import preferences ([vscode.json](https://github.com/eneax/dotfiles/blob/main/vscode.json) and [my-vs-code-extensions](https://github.com/eneax/dotfiles/blob/main/my-vs-code-extensions.md)).

**Hyper** (terminal): config for [.hyper.js](https://github.com/eneax/dotfiles/blob/main/.hyper.js).

### Oh My Zsh

Install `Oh My Zsh` for a better terminal experience:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Update everything in `Oh My Zsh` to the latest version:

```shell
omz update
```

**Important**: If you change something in your Zsh configuration (`.zshrc`), you have to restart it:

```shell
source ~/.zshrc
```

Install `af-magic` as a new theme for your terminal:

```shell
brew install af-magic
```

Make it the default theme for `Oh My Zsh`:

```shell
echo 'eval "$(af-magic init zsh)"' >> ~/.zshrc
```

As a font we will be using `Inconsolata for Powerline` in Hyper and VS Code.

First install the Casks fonts for the Homebrew Cask project:

```shell
brew tap homebrew/cask-fonts
```

Then, install the desired font:

```shell
brew install --cask font-inconsolata-for-powerline
```

Use the new font in Hyper by adding to the `config` object in `.hyper.js`: `fontFamily: 'Inconsolata for Powerline'`.

If the theme and font changes do not apply, reload your Zsh configuration (`.zshrc`) or close/open Hyper.

Use the new font in Visual Studio Code:

- open `settings.json` in VS Code by pressing `⌘ + ,`
- look to the right for a button to `Open Settings (JSON)`
- paste these `key/value` pairs:

```json
"terminal.external.osxExec": "Hyper.app",
"terminal.integrated.defaultProfile.osx": "zsh",
"terminal.integrated.fontFamily": "Inconsolata for Powerline",
```

Zsh configuration file (`.zshrc`): copy and paste from [the local file](https://github.com/eneax/dotfiles/blob/main/.zshrc).

### GIT

From the terminal, set the global `name` and `email`:

```shell
git config --global user.name "Your Name"
git config --global email "you@your-domain.com"
```

Print global git configuration:

```shell
git config --list
```

### NVM for Node/npm

The [Node Version Manager](https://github.com/nvm-sh/nvm) (NVM) is used to install and manage multiple versions of Node. After installing it via Homebrew in a previous step, type the following commands to complete the installation:

```shell
echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc
```

Restart Zsh config:

```shell
source ~/.zshrc
```

Now install the latest `Node LTS version`:

```shell
nvm install <latest LTS version from https://nodejs.org/en/>
```

Next, check if the installation was successful and if the node package manager (npm) was installed along the way:

```shell
node -v && npm -v
```

Update npm to its latest version:

```shell
npm install -g npm@latest
```

And set `name` and `email` for npm:

```shell
npm set init.author.name "your name"
npm set init.author.email "you@example.com"
```

If you want to list all your installations of `Node.js`, type the following:

```shell
nvm list
```

If you want to install a newer version of `Node.js`:

```shell
nvm install <version> --reinstall-packages-from=$(nvm current)
nvm use <version>
nvm alias default <version>
```

### ESLint

My [ESLint rules](https://github.com/eneax/dotfiles/blob/main/.eslintrc) are included in my [dotfiles](https://github.com/eneax/dotfiles) repo and the [config package](https://github.com/eneax/eslint-config-eneax) is installed via npm.
