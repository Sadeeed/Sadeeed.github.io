---
title: Setting up macOS for Python development
type: page
description: Lets make macOS feel a little more like my Linux environment
topic: software development
---

### Backstory
I have been using linux for as long as I can remember so naturally I prefer to use it for development. However, my trusty thinkpad recently died (RIP 🪦) and since there was no replacement thinkpad available at work I was given a mac instead. I was a little hesitant at first but I decided to give it another try. I thought I would share some of the things I have done to make it feel more like my linux environment.

<!-- ### Tech Stack
I'll try to keep this list updated as I add more things to my setup.
- Python, Django, Flask, PostgreSQL, ZSH -->

### CLI Tools
#### Homebrew
Having a package manager is a must for me, downloading apps from the internet is a pain and I prefer to do it from the terminal when possible.
[Homebrew](https://brew.sh/) is a package manager for macOS. It makes installing and updating packages a breeze. It also has a [cask](https://formulae.brew.sh/cask/) feature which allows you to install GUI applications.

Installing homebrew is as easy as running the following command in your terminal:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Note: I'll be using homebrew to install most of the tools in this list.

#### Pyenv
![pyenv](https://raw.githubusercontent.com/pyenv/pyenv/master/terminal_output.png)
Coming from Manjaro I am used to having multiple versions of python installed on my machine. But its not that easy to install and manage multiple Python installations on MacOS and many other linux distributions for that matter. That is where [pyenv](https://github.com/pyenv/pyenv) comes in. It allows you to install and manage multiple versions of python on your machine. It also allows you to set a global python version or set a python version for a specific directory. This is very useful when working on multiple projects that use different versions of python.

Install pyenv using homebrew:
```bash
brew install pyenv
```
We need to do a few more things to get pyenv working. (This is only for zsh, if you are using bash follow the instructions [here](https://github.com/pyenv/pyenv#set-up-your-shell-environment-for-pyenv)
```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
brew install openssl readline xz tcl-tk
```

#### Nvm
For the same reason as pyenv I also use [nvm](https://github.com/nvm-sh/nvm) to manage multiple versions of node.

nvm can be installed using their install script:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

#### Powerlevel10k
[![p10k](/images/posts/switching_to_macos/powerlevel10k.png)](https://github.com/romkatv/powerlevel10k)
Manjaro comes with powerlevel10k pre-installed and I have been using it for a while now. I really like the way it looks and the features it provides. So I decided to install it on my mac as well.

Installation is pretty simple but we have to add it the our .zshrc file so it can load when we open a new terminal.
```bash
brew install romkatv/powerlevel10k/powerlevel10k
echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
```
Before we proceed i would recommend installing a [nerd font](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k) otherwise you will see weird symbols in your terminal.
Thats it! Now you can run `p10k configure` to configure powerlevel10k or you can restart your terminal.


### GUI Tools
#### Alacritty
[![alacritty](https://user-images.githubusercontent.com/8886672/103264352-5ab0d500-49a2-11eb-8961-02f7da66c855.png)](https://github.com/alacritty/alacritty)
I dont really like the default terminal that comes with macOS so I decided to install [Alacritty](https://alacritty.org/). It is a terminal emulator with a lot of features and it is very fast. It is also very customizable and you can change the font, colors, etc. I use it with powerlevel10k and it looks great.

It is one of those few things that I'd recommend installing from the [website](https://alacritty.org/) not because the homebrew version is bad but because the website has a link to the short and concise docs which are very helpful.
Anyway, if you prefer you can install it using homebrew:
```bash
brew install alacritty
```

The default icon did not fit so I replaced it with this one:
![alacritty-icon](/images/posts/switching_to_macos/alacritty_icon.png)

You can either download the icon from [here](https://www.dropbox.com/s/0i4ez0el7paksg3/Alacritty.icns?dl=0) or you can run the following command to download and set the icon:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/hmarr/dotfiles/main/bin/update-alacritty-icon.sh)"
```

#### Termius
![termius](https://www.techrepublic.com/wp-content/uploads/2023/02/termiusa.jpg)
Termius is the only SSH client that I have used and I really like it. It has a lot of great features and it is very easy to use. It also has a mobile app which is very useful when I am on the go. I use the free version which has all the features except sync between devices although I have found a way to sync my settings between devices which I will talk about in a later post.
It also has FTP / SFTP support which makes it a great all in one tool.


#### Maccy
![maccy](/images/posts/switching_to_macos/maccy-demo.gif)
I had a clipboard manager extension installed on gnome and I really missed it on macOS. I tried a few different ones but I ended up using [Maccy](https://maccy.app/).

Download the latest version from [github releases](https://github.com/p0deje/Maccy/releases/latest) page, or use Homebrew:
```bash
brew install maccy
```

### IDEs
#### Pycharm
![pycharm](/images/posts/switching_to_macos/pycharm.png)
Pycharm has been my go to python IDE for the past 2 years. It has everything that I need and I prefer the intellisense over vscode. I also like the fact that it has a built a database viewer which has been very helpful when working with databases. I use the professional version at work but the community version is also great.

You can download pycharm from [here](https://www.jetbrains.com/pycharm/download/#section=mac).

Heres a list of plugins that I use:
**Appearence**
- [Dracula Theme](https://plugins.jetbrains.com/plugin/12275-dracula-theme)
- [Atom Material Icons](https://plugins.jetbrains.com/plugin/10044-atom-material-icons)

**Others**
- [Github Copilot](https://plugins.jetbrains.com/plugin/17718-github-copilot)
- [.ignore](https://plugins.jetbrains.com/plugin/7495--ignore)
- [.env files suppport](https://plugins.jetbrains.com/plugin/9525--env-files-support)
- [CSV Editor](https://plugins.jetbrains.com/plugin/10037-csv-editor)
- [Requirements](https://plugins.jetbrains.com/plugin/10837-requirements)
- [Translation](https://plugins.jetbrains.com/plugin/8579-translation)
- [Unix Timestamp Converter](https://plugins.jetbrains.com/plugin/19499-unix-timestamp-converter)


#### VSCode
![vscode](/images/posts/switching_to_macos/vscode.png)
I use vscode for everything else and even for python scripting. Vscode used to be my goto editor / IDE before I moved to Pycharm and I still really like it. It has alot of great features and plugins. I also like the fact that it is very lightweight and fast.

You can download vscode from [here](https://code.visualstudio.com/download).

Heres a list of extensions that I use:

**Appearence**
- [irul Theme](https://marketplace.visualstudio.com/items?itemName=shelcia.irul-theme)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

**Others**
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Better TOML](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml)
- [CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)
- [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)
- [IntelliJ IDEA Keybindings](https://marketplace.visualstudio.com/items?itemName=k--kato.intellij-idea-keybindings)
- [Shell Format](https://marketplace.visualstudio.com/items?itemName=foxundermoon.shell-format)
- [Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [C/C++ Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-extension-pack)
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)
- [isort](https://marketplace.visualstudio.com/items?itemName=ms-python.isort)
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Ligatures Limited](https://marketplace.visualstudio.com/items?itemName=kshetline.ligatures-limited)


That is all for now. I will keep updating this post as I add more things to my setup. If you have any suggestions or feedback feel free to reach out to me on [Discord](https://discord.com/users/280329281568112640).

<!-- {{< figure src="/images/thankyou.png" title="" >}} -->