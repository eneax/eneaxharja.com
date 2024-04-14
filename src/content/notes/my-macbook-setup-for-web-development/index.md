---
title: "MacBook setup for web development"
date: "2024-04-14"
---

My MacBook setup for web development includes tools like: [Homebrew](https://brew.sh), [Brave](https://brave.com), [Visual Studio Code](https://code.visualstudio.com) with [Oh My Zsh](https://ohmyz.sh), and [Git](https://git-scm.com).

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
  brave-browser  \
  visual-studio-code
```

Install terminal applications:

```shell
brew install \
  git \
  nvm
```

### GUI applications

**Brave** (browser): when I need to test something on Chromium.

**Visual Studio Code** (IDE): login with personal GitHub account.

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

Use `af-magic` as a new theme for your terminal:

```shell
code ~/.zshrc
```

Change the `ZSH_THEME` to `af-magic`: `ZSH_THEME="af-magic"`.

Make it the default theme for `Oh My Zsh`:

```shell
echo 'eval "$(af-magic init zsh)"' >> ~/.zshrc
```

Use `zsh` in Visual Studio Code:

- open `settings.json` in VS Code by pressing `⌘ + ,`
- look to the right for a button to `Open Settings (JSON)`
- paste these `key/value` pairs:

```json
"terminal.external.osxExec": "Terminal.app",
"terminal.integrated.defaultProfile.osx": "zsh",
```

Zsh configuration file (`.zshrc`): copy and paste from [the local file](https://github.com/eneax/dotfiles/blob/main/.zshrc).

### GIT

From the terminal, set the global `name` and `email`:

```shell
git config --global user.name "Your Name"
git config --global user.email "you@your-domain.com"
```

Configure Git to use VS Code as default editor:

```shell
git config --global core.editor "code --wait"
```

Print global git configuration:

```shell
git config --list
```
