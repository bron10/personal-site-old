---
title:	"The Only 11 Git Commands You Really Need"
date:	2018-05-30
updated:	2018-05-30
categories: git
slug: "git-commands"
---

Git is amazing and pretty much everywhere nowadays. But with its popularity comes an almost infinite list of commands which can confuse and intimidate many folks in the beginning. I mean, the most recommended book I could find is around [500 pages](https://www.git-scm.com/book/en/v2It)! Who has the time or patience to read all this when all they want to do is work an a small side project?

And because of exactly that, here is a commented list of the git commands I use 95% of the time, in roughly the order I use them in:

## 1) and 2): `git clone <URL>` and `git init`
To start working on a project you need to somehow tell git to please do its thing. If it's a completely new project, go into the root folder of it and use `git init` to create a git repository. If you initialized the project on your cloud host (e.g. GitHub) or are forking something, use `git clone <URL>` to download the project into the current folder.

## 3) `git status`
Outputs the current status of your repo. It shows what files are staged, which are unstaged and which are untracked. I mostly use it to check which files I've changed and if I need to stage or unstage some before creating a commit.

## 4) `git add`
If you've identified which files you want to track you need to add it to the repository by telling git about it. This is called staging. There are multiple ways to select files or parts (in git-language "hunks") of files:
* `git add <FILE>`: Stage only a specific file
* `git add .`: Stage all currently unstaged files
* `git add --patch / -p`: Go through each chunk of work in the unstaged files and decide which ones to stage. Unfortunately git doesn't really understand which chunks of work are actually related to each other so you might have to commit line by line...

## 5) `git reset HEAD <FILE>`
If you've accidentally staged a file the above command unstages it without deleting the changes though.

## 6) `git commit`

Now that you've staged all the files and hunks you want you can finally create a commit. This is pretty straightforward. All staged files will be added to the commit which is then saved and (for our intents and purposes) immutable. So be careful! You can change commits afterwards but you really shouldn't.

You can (and should) add a message to each commit to explain what this commit actually changes. Make sure that the message is not just

> `Fixed an error`

You want to make sure that future people (including yourself) can see what that commit did without having to go into the code base. A good rule of thumb is to include the following:
* What changed?
* How did you implement the change?
* Why did you implement the change?

Now, if you are working with a issue tracking system, usually something like

> `#123 | Added functionality X to work with config Y`

is completely fine, because if people need more context they can have a look at that issue. In this case you can even do `git commit -m "<MESSAGE>"`.

If you do not have an issue tracker I recommend that you seriously consider adding a summary as well. As with most things, try to keep it as short as possible without omitting useful information.

### **OMG I broke everything!**

So what do you do if you messed up a commit? Check out [this page](https://sethrobertson.github.io/GitFixUm/fixup.html) which will help you out.

## 7) `git pull -r`
And its longform `git pull --rebase`.

Before you're ready to push that commit into the great big world, you should pull and rebase from the origin (the place on the internet where your repository sits).

Now, if you're not the only person working on the code base you might get some merge conflicts because someone on your team worked on the same file as you. Simply follow git's instructions, change the file, **make sure to test that everything works** and continue working as if nothing happened.

If you're the only person working on the code and you are 100% sure that you worked on the most up-to-date version you can skip all of the above. Don't worry, you can't break anything. Git will complain if there are differences after all.

## 8) `git push`
Now that everything is fine and dandy you can simply push the code into the ether as in the cloud location of your repository. This "releases" the code to everyone else and they can now check out your code to work on it as well.

**Make sure you have removed any sensitive info though!** Especially passwords and API tokens can put you into a very awkward position later on.

## 9) `git stash`
So you've made a ton of changes but only want to commit a few and `git pull` doesn't let you? `git stash` to the rescue. Simply type it in and all the unstaged changes get saved in a stash and you can pull and push again. Keep in mind that stashing resets the stashed parts of a file to what they were before the changes (usually the last commit). To get those changes back you need to `git stash pop`.

There are more advanced things you can do with git stash (as explained [here](https://dev.to/srebalaji/useful-tricks-you-might-not-know-about-git-stash-117e)) but for my day-to-day work I've found that keeping it simple is enough.


## 10) and 11) `git diff` and `git apply`
If you've made changes that don't warrant a commit but you really want other people to have them (e.g. you're in the middle of a large refactor but you're going on holiday next week) you can create patches.

Simply stage everything as if you were doing a commit and then instead of doing the commit do:

`git diff --cached --binary > someCreativePatchName.patch`

Then you can send that patch file to whoever needs it and they can apply the patch with:

`git apply someCreativePatchName.patch`
