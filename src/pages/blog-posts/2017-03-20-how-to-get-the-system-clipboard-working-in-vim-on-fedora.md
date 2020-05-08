---
title:  "How to get the System Clipboard working in Vim on Fedora"
date:   2017-03-20
updated:   2017-03-20
categories: vim linux fedora ricing
slug: "clipoard-vim-fedora"
---

I finally decided to properly learn vim which also meant that was trying to get the hang of copy and paste. Including using the system clipboard. And turns out it's not as easy as it sound. Fedora for some reason only ships the `xterm_clipboard` function with gVim. But I didn't actually want the GUI. Luckily, gVim comes with a vi mode, `gvim -v`. But that's not ideal because `$vim` and my default editor still pointed to the "old" vim without the clipboard functionality.

To fix all this, here's what you need to do:

First, obviously, install gvim:

	$sudo dnf install vim-X11

You can check that the system clipboard functionality is installed by typing `gvim --version` and looking for `xterm_clipboard`. It should now have a '+' in front of it.

Then, you need to alias the `vim` command with `gvim -v` and set the default editor to gVim too. This all happens in your `.bashrc`:

	alias vim='gvim -v'
	export EDITOR="gvim -v"
	export VISUAL="$EDITOR"

And that's it. Now you only need to activate the changes in your `.bashrc` with:

	$source ~/.bashrc

The default register for the system clipboard is `+` so you need to use `"+y` and `"+p` to copy and paste.

