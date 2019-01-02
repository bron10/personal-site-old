---
title: "How the Imperial Splendour tool package came to be"
date: 2017-12-03
categories: empire-total-war open-source
slug: "is-launcher-framework"
---

About two years ago, I blogged about [my plans to create a launcher for my brother's Empire: Total War mod](/article/one-project-2016). And now I'm finally done. It didn't take me the whole two years (thankfully) but happend in phases. Which led to a lot of rewriting because I'd learn a lot in between the phases. Kind of annoying but actually a good thing. Because the version I released a year ago was not that great. It was working but the code base was full with dependencies, stuff happening implicitly and just not that pretty code. This has been changed with the release of the beta for version 1.0.

## The Beginnings

Short recap: Some time in mid-2014, when I'd just started my computer science degree, my brother asked my to write a launcher for his mod. And I, naive as I was back then, agreed. Since I didn't know what I was doing I didn't actually do any work for about 2 years.

The first tenative prototypes ([version 0.1](https://github.com/SophieAu/imperial-splendour-launcher/releases/tag/v0.1) and [version 0.2](https://github.com/SophieAu/imperial-splendour-launcher/releases/tag/v0.2)) weren't released until September 2016 during my winter break from uni. At that point, the launcher was a one-size-fits-all solution for installing, launching and uninstalling the mod. It worked, mostly, but it wasn't great. The code was one big blob and the using the launcher was way too complicated. But before I had time to improve on the code, the semester had started and I was busy with uni work.

Cut to October 2017: I'd finally finished my bachelor's degree and my grad job wouldn't start until January. Time to finally finish the launcher. By that point, I hadn't written Java code for a while but it was incredibly easy to get back into it. What I had been doing though was reading about clean code and software architecture. This definitely helped me in my decision to untangle my one app into four and an API.

## The Untangling

One thing that continually popped up when reading about architecture was modularity. Everything should be as independent as possible. I more or less did that already with multiple classes and neatly organized methods. But the launcher, the final product was just all functionality shoved into one slightly confusing UI. That's why I decided to seperate the launcher into 4 different programs. An installer, a proper launcher, an uninstaller and a patcher.

With that decision came the need to identify an underlying base API. Seperating out the different functionalities is not much better than one big blob if I just take the old source code and delete and change things here and there depending on the functionality.

My approach to this was:
1. Create an empty main class each for the Installer, Launcher, Uninstaller and Patcher
2. Move the code from my old source into those classes if needed
3. Move code needed by multiple of those classes into a different class that all can access.

When I was happy with the skeleton I'd built, I started actually cleaning up the code and moving as much as possible into the future-API class. Pretty quickly it became obvious that there were two main functionalities:

* Moving around various files
* Reading and chaging the status file

Of those two functionalities, the "outside world" was only really interested in moving around the files. As such, I could comfortably move all the code related to the status file into a package private seperate class.

## The Test Phase

Throughout the whole refactoring process I had inserted log4j (log) calls wherever I deemed them useful. So when I finally got around to testing the programs, I had nice long logs of what happened. And it mostly went really well. Of course there were a few hickups here and there most of them were due to Java not playing nice with Windows (or the file system in general).

And so, after a few Saturdays with my brother and a weekend trying to fix a guy frum Hungary's problems, the whole Imperial Splendour Launcher package is finally out of beta and ready to be released as version 1.0. This is the release post actually.

So, go ahead, check out all the components [here](https://github.com/imperial-splendour) and feel free to use whatever you find useful for your own projects.

