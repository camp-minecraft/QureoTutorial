### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントの◯のブロック||``
``||logic.もし◯◯なら||``
``||logic.=||``
``||blocks.樫(かし)の板材||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(LEFT, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```