### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを自分の位置にもどす||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {
    agent.teleportToPlayer()
})
```