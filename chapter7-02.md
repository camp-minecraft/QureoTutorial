### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントの向きを○に変える||``ブロックをつかうよ！
みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 14; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 14; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.turn(LEFT_TURN)
        }
    }
})
```