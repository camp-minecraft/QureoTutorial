### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを◯に◯ブロックいどうさせる||``
``||agent.エージェントを◯をはかいさせる|``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
        }
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
            hiragana_agent.move(UP, 1)
            hiragana_agent.move(FORWARD, 2)
            hiragana_agent.move(DOWN, 1)
        }
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})

```