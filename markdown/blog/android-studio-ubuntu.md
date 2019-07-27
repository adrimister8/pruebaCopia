---
title: Installing Android Studio 2 on 64-bit Ubuntu
date: "2016-05-08"

tags:
  - android
  - sdk
  - android-studio
  - ubuntu
  - setup
---

Android Studio 2 is definitely a brilliant, modern and interesting technology! ^\_\_^

Unfortunately, I faced a few setup issues mainly related to dynamic libraries on my 64-bit Ubuntu 16 system - so, I'm going to describe my experience in a step-by-step tutorial.

## Install the required 32-bit libraries

A few libraries are needed by the SDK, as explained on the SDK website; to install them, run this terminal command:

```bash
sudo apt-get install lib32z1 lib32ncurses5 lib32stdc++6
```

## Install mesa-utils

It seems that the Android SDK employs **glxinfo**; if it is not available, you might notice errors when starting the emulator.

To install **glxinfo** and other tools, run:

```bash
sudo apt-get install mesa-utils
```

## Reference system libraries

The Android emulator crashed on startup - more precisely, the issue was due to _hardware rendering_; however, in lieu of switching to _software rendering_ (which is slower and might not completely address the problem), these steps are suggested:

1. Edit **\$HOME/.profile**

1. Add the following line:

   ```bash
   export ANDROID_EMULATOR_USE_SYSTEM_LIBS=1
   ```

1. To quickly and globally apply the changes, you could log out of the desktop environment and re-log

## Install Android Studio

1. Point your web browser to [Android Studio's website](http://developer.android.com/sdk/)

1. Download the zip bundle for Linux

1. Extract it to a target directory of your choice

1. Add its **bin** subdirectory to your **PATH** environment variable

1. Now, to start the setup process, you should run:

   ```bash
   studio.sh
   ```

   and follow the user-friendly wizard.

Finally, once the IDE is up and running, you may want to select the menu item **Tools -> Create Desktop Entry...** to integrate Android Studio into your desktop environment.

And now, you can enjoy creating Android apps! ^\_\_^