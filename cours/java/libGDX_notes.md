---
title: "libGDX: notes"
date: 2019-03-30
author: Sol
sidebar: auto
project: false
hide: false
---

## Tools

* [TiledMapEditor](https://www.mapeditor.org/)
* [SpritersResource](https://www.spriters-resource.com/)
* [libgdx texturepacker](https://code.google.com/archive/p/libgdx-texturepacker-gui/downloads)
    *[arch(aur)](https://aur.archlinux.org/packages/gdx-texture-packer-gui/)
        * `$ gdx-texture-packer-gui`

## Tutoriels

* [Bren Aureli: Super Mario Bros (Yt playlist)](https://www.youtube.com/watch?v=a8MPxzkwBwo&index=1&list=PLZm85UZQLd2SXQzsF-a0-pPF6IWDDdrXt)

## Life cycle

* [libgdx](https://github.com/libgdx/libgdx/wiki/The-life-cycle)

![Image](https://i.imgur.com/yDS7NEl.png)

* `create()`: Method called once when the application is created.
* `resize(int width, int height)`: This method is called every time the game screen is re-sized and the game is not in the paused state. It is also called once just after the create() method. The parameters are the new width and height the screen has been resized to in pixels.
* `render()`:	Method called by the game loop from the application every time rendering should be performed. Game logic updates are usually also performed in this method.
* `pause()`:	On Android this method is called when the Home button is pressed or an incoming call is received. On desktop this is called just before dispose() when exiting the application. A good place to save the game state.
* `resume()`:	This method is only called on Android, when the application resumes from a paused state.
* `dispose()`:	Called when the application is destroyed. It is preceded by a call to pause().

### Mainloop ?

> Libgdx is event driven by nature, mostly due to the way Android and JavaScript work. An explicit main loop does not exist, however, the ApplicationListener.render() method can be regarded as the body of such a main loop.

## Modules

* [libgdx](https://github.com/libgdx/libgdx/wiki/Modules-overview)

![Image](https://i.imgur.com/UKQvKGu.png)



## Good to know

### Sprites vs Scène & Actors

* [SO](https://stackoverflow.com/questions/13780742/libgdx-difference-between-sprite-and-actor)

A Sprite is basically an image with a position, size, and rotation. You draw it using SpriteBatch, and once you have your your Sprites and your SpriteBatch, you have a simple, low-level way to get 2D images on the screen anywhere you want. The rest is up to you.

Actor, on the other hand, is part of a scene graph. It's higher-level, and there's a lot more that goes into a scene graph than just positioning images. The root of the scene graph is the Stage, which is not itself displayed. The Stage is a container for the Actors that you add to it, and is used for organizing the scene. In particular, input events are passed down through the Stage to the appropriate Actor, and the Stage knows when to tell the Actor to draw itself. A touch event, for example, only gets sent to the Actor that got touched.

But note that Actor does not contain a texture like Sprite does. Instead you probably want to use  Image, a subclass of Actor that's probably closer to Sprite than just a plain Actor. Other subclasses of Actor contain text, and so on.

Another big advantage of Actors is that they can have Actions. These are a big topic, but they essentially allow you to plan a sequence of events for that Actor (like fading in, moving, etc) that will then happen on their own once you set them.

So basically Actor does a lot more than Sprite because it's part of a graphical framework.