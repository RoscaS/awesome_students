---
title: "Présentation: exemple de code"
date: 2019-05-12
author:  "Nathan, Edwin, Sol"
sidebar: auto
project: false
hide: false
---

##  client

```java
import com.badlogic.gdx.scenes.scene2d.Stage;

public class Client {

    public static void exemple(Stage stage) {

        Dessinator dessinator = new Dessinator();
        dessinator.petitRectangleChou(stage);
    }
}
```

## Facade

```java
import com.badlogic.gdx.graphics.Color;
import com.badlogic.gdx.graphics.Pixmap;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.Sprite;
import com.badlogic.gdx.scenes.scene2d.Stage;

public class Dessinator {

    // ...

    public Dessinator() { }

    /*----------------------------------------------------------*\
    |*							Public Methods
    \*----------------------------------------------------------*/

    public void petitRectangleChou(Stage stage) {

        Pixmap rectanglePixmap = createProceduralPixmap(0, 0, 150, 200);
        Texture rectangleTexture = makeTextureFromPixmap(rectanglePixmap);
        Sprite rectangle = makeSpriteFromTexture(rectangleTexture, 150, 200);
        new ShapeActor(stage, rectangle);
    }

    /*----------------------------------------------------------*\
    |*							Private Methods
    \*----------------------------------------------------------*/

    // ...

    private Sprite makeSpriteFromTexture(Texture texture, int width, int height) {
        Sprite sprite = new Sprite(texture);
        sprite.setOrigin(width, height);
        return sprite;
    }

    private Texture makeTextureFromPixmap(Pixmap pixmap) {
        Texture texture = new Texture(pixmap);
        texture.setFilter(Texture.TextureFilter.Nearest, Texture.TextureFilter.Nearest);
        return texture;
    }

    private Pixmap createProceduralPixmap(int x, int y, int width, int height) {
        Pixmap pixmap = new Pixmap(width, height, Pixmap.Format.RGBA8888);
        pixmap.setColor(Color.ORANGE);
        pixmap.fillRectangle(x, y, width, height);
        return pixmap;
    }

    // ...
}
```

## Une dépendance parmis d'autres

```java
import com.badlogic.gdx.graphics.g2d.Batch;
import com.badlogic.gdx.graphics.g2d.Sprite;
import com.badlogic.gdx.scenes.scene2d.Actor;
import com.badlogic.gdx.scenes.scene2d.Stage;

public class ShapeActor extends Actor {

    private Sprite shape;
    private Batch batch;
    
    /*----------------------------------------------------------*\
    |*							Constructors
    \*----------------------------------------------------------*/

    public ShapeActor(Stage stage, Batch batch, Sprite shape) {

        this.batch = batch;
        this.shape = shape;
        stage.addActor(this);
        setVisible(true);
    }

    /*----------------------------------------------------------*\
    |*							Update Methods
    \*----------------------------------------------------------*/

    @Override
    public void draw(float parentAlpha) {
        super.draw(batch, parentAlpha);
        shape.draw(batch);
    }
}
```
