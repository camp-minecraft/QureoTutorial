### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、スイッチをおさせよう！

こんかいは``||loops.くりかえし||``ブロックをつかってゴミをこわすよ！なにを4かいくりかえせばいいかな？

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            agent.destroy(FORWARD)
            agent.move(FORWARD, 1)
        }
    })
```


```template
    player.onChat("run", function () {

    })
```