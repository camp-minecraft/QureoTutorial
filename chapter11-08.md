# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇へおかせる||``

すうじをそれぞれどれだけかえればいいかな？

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    hiragana_agent.teleport(pos(0, 0, 0))
})

```

```ghost
player.onChat("run", function () {
    hiragana_agent.teleport(pos(0, 0, 0))
    hiragana_agent.place(FORWARD)
})

```