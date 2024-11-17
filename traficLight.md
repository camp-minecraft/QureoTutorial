# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
    hiragana_agent.setSlot(1)
    for (let index = 0; index < 7; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.setSlot(2)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.setSlot(5)
    hiragana_agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
```

```template
    hiragana_agent.setSlot(1)
    for (let index = 0; index < 7; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.setSlot(2)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.setSlot(5)
    hiragana_agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
```