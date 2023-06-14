---
title: Setting up macOS for Python development
type: page
description: Lets make macOS feel a little more like my Linux environment
topic: software development
---

### Backstory
I have been using linux for as long as I can remember so naturally I prefer to use it for development. However, my trusty thinkpad recently died (RIP 🪦) and since there was no replacement thinkpad available at work I was given a mac instead. I was a little hesitant at first but I decided to give it another try. I thought I would share some of the things I have done to make it feel more like my linux environment.

### Tech Stack
I'll try to keep this list updated as I add more things to my setup.
- Python, Django, Flask, PostgreSQL, ZSH

### Tools
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

#### nvm
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

#### Alacritty
[![alacritty](https://user-images.githubusercontent.com/8886672/103264352-5ab0d500-49a2-11eb-8961-02f7da66c855.png)](https://github.com/alacritty/alacritty)
I dont really like the default terminal that comes with macOS so I decided to install [Alacritty](https://alacritty.org/). It is a terminal emulator with a lot of features and it is very fast. It is also very customizable and you can change the font, colors, etc. I use it with powerlevel10k and it looks great.

It is one of those few things that I'd recommend installing from the [website](https://alacritty.org/) not because the homebrew version is bad but because the website has a link to the short and concise docs which are very helpful.
Anyway, if you prefer you can install it using homebrew:
```bash
brew install alacritty
```



Hello. If you like this template, I'd be happy to get a [coffee donation](https://ko-fi.com/heycharlola) :)

{{< figure src="/images/thankyou.png" title="" >}}