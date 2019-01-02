---
title:	"Setting up jekyll on Fedora"
date:	2017-02-28
categories: jekyll fedora linux
slug: "jekyll-fedora"
---
Since jekyll is a ruby gem, you need to install ruby with its developer tools.

	$ sudo dnf instal ruby-full

I have installed and am running jekyll without `rubygems-devel` somehow, so if you want to try to go without, do

	$ sudo dnf install ruby-devel

Then, if nothing is missing, you can simply install the jekyll gem. Quick side note: The flags are there so that jekyll isn't installed into `~/bin` but into `~/.gem/bin`. You don't need to do that but I just really like my `bin` folder to be tidy.

	$ gem install jekyll -n ~/.gem/bin

It rarely works as smoothly as this though. Various errors may show because this or that package is not installed. Here are a few of them:

First, make sure you have a C compiler and `make`. `gcc`is usually the way to go. I tend to check stuff like that by trying to install it. If it's already there northing happens and if it isn't I'm alrady halfway there.

	$ sudo dnf install gcc make

If you can't compile (as in you're not even getting a gcc error), you can go the nuclear option and install the whole C development tools group. That's a bit overkill but at least it should work now.

	$ sudo dnf group install "C Development Tools and Libraries"

Then, you might run into a compiler error, such as:

	gcc: error: conftest.c: No such file or directory
	gcc: error_ /usr/lib/rpm/redhat/redhat-hardened-cc1: No such file or directory

The missing package:

	$ sudo dnf install redhat-rpm-config

If the compiler complains about something `Failed to complete patch task` you need the `patch` package

	$ sudo dnf install patch

If none of this works, now might be the moment to burn your machine and decide to never use a computer ever again and move into a forrest hut without electricity.

Just kidding. jekyll can also be installed straight from the Fedora repos. This has the advantage that all dependencies will be installed along with it. You are however dependent on whatever version is in the Feodra repo.

	$ sudo dnf install rubygem-jekyll

