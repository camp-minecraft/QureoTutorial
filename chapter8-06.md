### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに◯へ置かせる|``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, RIGHT) == false) {
        } else {
        }
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, RIGHT) == false) {
            agent.place(RIGHT)
        } else {
            agent.place(LEFT)
        }
    }
})
```