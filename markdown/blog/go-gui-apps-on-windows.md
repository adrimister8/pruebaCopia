---
title: Visual applications with Go on Windows
date: "2016-01-02"

tags:
  - go
  - windows
  - gui
  - app
  - gtk
  - msys2
  - mingw
  - setup
---

## Introduction

[Go](https://golang.org/) is a great programming language, supporting more and more cross-platform libraries for the creation of visual applications - especially [GTK 3](https://github.com/gotk3/gotk3).

The benefits are evident - providing a uniform graphical user interface (GUI) when developing _native_ programs. I definitely appreciated GTK+'s flexibility and portability when creating [MoonDeploy](/blog/moondeploy-2/), my cross-platform deployment tool.

The setup on Linux is generally very simple - on Ubuntu, for example, you'll just have to install the **gcc** compiler system and the required C libraries via the _apt-get_ package manager.

In this short article we will see how to configure a 64-bit Windows system in order to develop a visual application.

## Installing msys2

We'll employ **msys2**, a brilliant development environment for Windows, including the **MinGW-w64** compiler:

1. Go to the [msys2 website](https://msys2.github.io/), download the installer having `x86_64` in its name and run it

1. Follow the wizard; we'll assume that msys is installed into the default directory `C:\msys64`

1. As soon as the wizard has finished, run _msys2's console_ (which should be suggested by the wizard itself)

1. In the console, run:

   ```bash
   pacman --needed -Sy bash pacman pacman-mirrors msys2-runtime
   ```

1. Close and restart the console

1. Run:

   ```bash
   pacman -Su
   ```

1. Restart the console

1. To install _MinGW-w64_, run:

   ```bash
   pacman -S mingw-w64-x86_64-gcc
   ```

1. To install _pkg-config_, run:

   ```bash
   pacman -S mingw64/mingw-w64-x86_64-pkg-config
   ```

1. Add the following paths to your `PATH` environment variable:

- `C:\msys64\mingw64\bin`

- `C:\msys64\usr\bin`

## Installing the GTK+ 3 libraries

Installing GTK+ 3 with msys2 requires a single instruction in msys2's console:

```bash
pacman -S mingw64/mingw-w64-x86_64-gtk3
```

Generally speaking, if you wish to look for a library whose you don't know the exact name, try running:

```bash
pacman -Ss text_to_search
```

**Please, note:** for 32-bit systems, the process is similar - just use a different installer and replace the **x86_64** qualifier in package names.

Now, you can close msys2 - the installed tools will be available in DOS command windows as well.

## Installing Go

1. Install Go by downloading and running the installer from [its website](https://golang.org/)

1. Set the **GOROOT** environment variable to Go's root directory

1. Add Go's **bin** subdirectory to the **PATH** environment variable

1. Create a directory that will be your [Go path](https://golang.org/doc/code.html) (for example, **C:\GoPath**)

1. Assign such directory to the **GOPATH** environment variable

## Installing GUI libraries for Go

This task usually requires Go's setup tool, `go get`; in particular, for [gotk3](https://github.com/gotk3/gotk3), you'll need to run, _in a DOS command window_:

```bash
go get github.com/gotk3/gotk3/gtk
```

If everything was installed correctly, the command should print no output, completing after a few minutes; otherwise, please double-check your _msys2_ setup.

## Compiling a visual Go program

By default, on Windows, running GUI programs created with Go will show the DOS window as well, in the background.

To prevent this default behavior, you can compile the app by adding the following parameter to `go build`: `-ldflags "-H windowsgui"`. For example:

```bash
go build -ldflags "-H windowsgui" SourceFile.go
```

On Linux, no additional arguments are required.

## Further references

- [msys2](https://msys2.github.io/)

- [MinGW-w64](http://mingw-w64.org/)

- [Go language](https://golang.org/)

- [gotk3](https://github.com/gotk3/gotk3)

- [GTK+](http://www.gtk.org/)

- [Glade](https://glade.gnome.org/)

- [MoonDeploy](https://github.com/giancosta86/moondeploy)