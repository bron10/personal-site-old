---
title:  "Imperial Splendour Launcher - The Requirements"
date:   2016-01-31
updated:   2016-01-31
categories: empire-total-war
slug: "is-launcher-requirements"
---

After discussing my over-all plan for the Launcher [last month](/article/one-project-2016), I'll go into detail about the requirements and how I want to meet them today.

They are more or less the same as the ones outlined in my intro post.

1. Move Files: to move the modding files into the Empire: Total War folder (it “installs” the mod)
2. Remove Files: to move the modding files out of the Empire: Total War folder (it uninstalls the mod)
3. Start Imperial Splendour: A link to the Empire: Total War launcher (to start the game)

First, to understand why I'm doing what I'm doing a bit of background on the mod. As in, how it works: In order for the mod to work, you have to put the files for the mod into a certain folder. If you now open the regular Empire Total War launcher, the mod will be started. But of course people might want to switch between the regular game and Imperial Splendour. And that's where I come in.

The launcher in itself should be easy to get to work. The big problem will be all the user comfort I'm hoping to be able to put in. You don't want to have to choose the path for where to install the files every time. But you also don't want to have to choose to install the files every time you load the launcher. Or uninstall (i.e. delete) all the Imperial Splendour files manually just to play the normal version of Empire: Total War.

#
The Launcher (at least in version 1.0) is supposed to look like this:

![My brother's design for the launcher](/img/is-launcher-mockup.png)

##GENERAL
Every time a path or file cannot be found, throw an exception and open a dialog so that the user can search for the file/folder themselves. If they choose cancel, undo everything

## ON FIRST STARTUP
* Choose folder with mod files (`currentpath\mod` as default)
* Move mod files to `C:\ProgramFiles\steam\steamapp\commons\ETW\data` or `C:\Programs(x86)\steam\steamapp\commons\ETW\data`
* Save mod folder in a file so that is is saved for next round

## ON STARTUP
* Check if the mod-steam folder already exists and contains all the files needed. If a file is missing, open a dialog for either retry, searching for file, or cancel.
* Copy files from the steam-mod folder into the actual game

## PLAY BUTTON
* Close launcher
* Start the Empire: Total War .exe

## UNINSTALL/INSTALL BUTTON
* Delete all the files that were moved into game folders, but *keep the files in the mod folder*. Ignore file not found exceptions
* In case the Imperial Splendour files were uninstalled, this will move them back into the actual game folder(s)

## FORUM BUTTON
* A simple html link to the forum.

## EXIT BUTTON
* First uninstall (if not already happened), then exit

# 
Admittedly, there are a few things already that I'd like to improve or better: add into the program. But for version 1.0 this has to be enough. In later versions, the background might change depending on whether Imperial Splendour or the "normal" game is active and there might be a help button too but that's all in the future. For now, I'm focusing on having a working launcher that does all the basic things.
