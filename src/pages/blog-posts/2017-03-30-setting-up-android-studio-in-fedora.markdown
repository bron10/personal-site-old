---
title:  "Setting up Android Studio on Fedora"
date:   2017-03-20
categories: linux fedora android android-studio 
slug: "android-studio-fedora"
---

Obviously, before installing anything, you have to [download](https://developer.android.com/studio/index.html) Android Studio. The official Android site even provides [instructions](https://developer.android.com/studio/install.html) on how to install Android Studio. Before you do anything I say, you should definitely follow them and see if it works. Chances are though, it won't.

## No Space Left On Device

Okay, let's say you installed everything as per the instructions but you can't seem to get anything (in most cases the SDK) installed properly. Most likely, the problem is that Android Studio wants to download everything into `/tmp`. This is good in theory but since in my case temp has only 2GB and the SDK alone has 1.5GB it fails spectacularly.

You can check if this is the case by searching for the phrase `No space left on device` in the error message.

There's two ways to work around the error. Number one is changing the size of `/tmp`. The other is simply changing the directory Android Studio will use as temp dir. I'll explain the second way since it seemed less intrusive:

In your Android Studio folder, navigate to `/bin` and open the `studio.sh` file in a text editor. Scroll down to `Collect JVM options and IDE properties.` Right after the first `if` there should be a line `VM_OPTIONS="-Djava.io.tmpdir...` If it isn't there, add it. In both cases the line needs to say:

	VM_OPTIONS="-Djava.io.tmpdir=<your path here>"

Obviously, instead of `<your path here>` you need to set your desired new temp dir.

## Java SDK not working -> class not found

Now, if that all works, you will most likely fail to run an app. The error will be `class not found: tools.jar` or something similar. Turns out, Android Studio is looking for your Java SDK in the JRE.

Check your PATH variables and make sure your JDK is the right path.


## Activating KVM to set up a virtual device
You might see this error whenever you try to create a virtual device. To start off, check that your cpu supports virtualization and turn it on in the bios. Checking is easiest by either googling it or just going into the bios.

Now that that's set, you need install the kvm packaged:

	sudo dnf install kvm

And that should be all. Now you can create a device without Android Studio complaining.

