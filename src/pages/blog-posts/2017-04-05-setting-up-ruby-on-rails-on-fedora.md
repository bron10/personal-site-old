---
title:  "Setting up Ruby and Rails on Fedora"
date:   2017-04-05
categories: linux fedora ruby rails mysql 
slug: "ruby-rails-fedora"
---

## Installing Ruby and Rails

There are multiple ways to install ruby and rails but an easy way, and the one I chose is through [rvm](https://rvm.io/). It is installed in two lines on your cli:

	$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
	$ \curl -sSL https://get.rvm.io | bash -s stable --rails --ruby

If you're having problems with the gpg, simply follow the on screen instructions. They worked brilliantly for me.

Now, to be able to work with ruby and rails, you need to reload your bashrc and profile

	$ source .bashrc
	$ source .bash_profile


## Setting up an existing project
If you already have a project you want to work on (e.g. forked one from GitHub), cd into the project folder and run

	$ bundle install

This will install all the gems required in the project's gemfile. Again, if there are problems, the message will most likely help you.

## Running a project
Now, if everything is set up, running a website is really simple:

	$ rails s

This serves the website to `localhost:3000`

If you get error messages that look like they might have something to do with a database, try the following:

	$ rake db:migrate

Or the nuclear option:
	
	$ rake db:drop db:create db:migrate

The first one obviously only works when you've got the database set up already.

