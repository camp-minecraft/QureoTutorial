### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯へ置かせる||``

``||agent.エージェントを◯に◯ブロック移動させる||``

``||agent.エージェントを自分の位置にもどす||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {
        for (let index = 0; index < 4; index++) {

        }

    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(UP, 1)
        }
        agent.move(DOWN, 4)
    }
})
player.onChat("run", function () {
    agent.teleportToPlayer()
})

```