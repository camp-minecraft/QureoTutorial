### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||agent.エージェントに◯をはかいさせる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        } else {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.move(FORWARD, 1)
        } else {
            hiragana_agent.destroy(DOWN)
            hiragana_agent.move(FORWARD, 1)
        }
    }
})
```