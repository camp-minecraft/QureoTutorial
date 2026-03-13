# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
    hiragana_agent.destroy(DOWN)
    hiragana_agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 3; index++) {
            hiragana_agent.move(UP, 1)
            hiragana_agent.setSlot(1)
            hiragana_agent.place(UP)
            hiragana_agent.move(DOWN, 1)
            hiragana_agent.setSlot(2)
            hiragana_agent.place(UP)
            hiragana_agent.destroy(FORWARD)
            agent.collectAll()
            hiragana_agent.move(FORWARD, 1)
        }
        hiragana_agent.setSlot(3)
        for (let index = 0; index < 3; index++) {
            hiragana_agent.move(BACK, 1)
            hiragana_agent.place(FORWARD)
        }
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(RIGHT_TURN)
    }
    hiragana_agent.move(UP, 1)
    hiragana_agent.place(DOWN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(BACK, 1)
    hiragana_agent.move(UP, 1)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(7)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(RIGHT, 2)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(RIGHT, 1)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(DOWN, 1)
    hiragana_agent.setSlot(4)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 2)
        hiragana_agent.move(FORWARD, 4)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.move(DOWN, 2)
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 3)
    }
    hiragana_agent.move(UP, 2)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.setSlot(5)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        hiragana_agent.setSlot(1)
        hiragana_agent.place(FORWARD)
    }
    hiragana_agent.move(UP, 1)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.destroy(DOWN)
    hiragana_agent.setSlot(6)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        hiragana_agent.place(FORWARD)
    }


```

```template
    hiragana_agent.destroy(DOWN)
    hiragana_agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 3; index++) {
            hiragana_agent.move(UP, 1)
            hiragana_agent.setSlot(1)
            hiragana_agent.place(UP)
            hiragana_agent.move(DOWN, 1)
            hiragana_agent.setSlot(2)
            hiragana_agent.place(UP)
            hiragana_agent.destroy(FORWARD)
            agent.collectAll()
            hiragana_agent.move(FORWARD, 1)
        }
        hiragana_agent.setSlot(3)
        for (let index = 0; index < 3; index++) {
            hiragana_agent.move(BACK, 1)
            hiragana_agent.place(FORWARD)
        }
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(RIGHT_TURN)
    }
    hiragana_agent.move(UP, 1)
    hiragana_agent.place(DOWN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(BACK, 1)
    hiragana_agent.move(UP, 1)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(7)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(RIGHT, 2)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(RIGHT, 1)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(DOWN, 1)
    hiragana_agent.setSlot(4)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 2)
        hiragana_agent.move(FORWARD, 4)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.turn(RIGHT_TURN)
        hiragana_agent.move(DOWN, 2)
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 3)
    }
    hiragana_agent.move(UP, 2)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.setSlot(5)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        hiragana_agent.setSlot(1)
        hiragana_agent.place(FORWARD)
    }
    hiragana_agent.move(UP, 1)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.destroy(DOWN)
    hiragana_agent.setSlot(6)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        hiragana_agent.place(FORWARD)
    }

```