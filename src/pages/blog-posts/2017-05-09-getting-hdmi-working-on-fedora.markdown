---
title:  "Getting HDMI audio working on Fedora"
date:   2017-05-09
categories: linux fedora
slug: "hdmi-fedora"
---
A few days ago, I wanted to stream a film on my tv. Since the tv isn't smart, I streamed on my laptop and plugged it into the tv. The video feed was no problem but the audio just didn't show up. Even a few times of turning everything off and on again wouldn't work. So in the end, I ended up on Google and this is how I got the sound to work:

To check if you screen actually shows up:

	$ aplay -l

Possible output:

```
**** List of PLAYBACK Hardware Devices ****
card 0: HDMI [HDA Intel HDMI], device 3: HDMI 0 [HDMI 0]
	Subdevices: 1/1
	Subdevice #0: subdevice #0
card 0: HDMI [HDA Intel HDMI], device 7: HDMI 1 [HDMI 1]
	Subdevices: 1/1
	Subdevice #0: subdevice #0
card 0: HDMI [HDA Intel HDMI], device 8: HDMI 2 [HDMI 2]
	Subdevices: 1/1
	Subdevice #0: subdevice #0
card 1: PCH [HDA Intel PCH], device 0: ALC286 Analog [ALC286 Analog]
	Subdevices: 0/1
	Subdevice #0: subdevice #0
```

Then try out every device and see which one is the right ourput device:

	$ aplay -D plughw:0,7 /usr/share/sounds/alsa/Front_Right.wav

With `0,7` standing for \<card no\>,\<device no\>

Spotify, mplayer, pulse etc need to be closed for this, otherwise you'll get an `audio open error`.

Then, force pulseaudio to load the hdmi device by adding

	load-module module-alsa-sink device=hw:0,7

in the `/etc/pulse/default.pa file`. There should already be a line with `load-module module-alsa-sink` so you only need to uncomment it and add the `device...` part. Of course, you need to subsitute the 0 and 7 with your device's numbers.

Then, restart pulseaudio:

	$pulseaudio -k
	$pulseaudio --start

Then, open the GNOME settings and choose built-in audio as the output device.

This was the way I did it. Potentially it would work with using the GNOME settings only or maybe the `aplay` part and then the GNOME settings. But by the time I found the option in GNOME settings, I'd already done all of the above.
