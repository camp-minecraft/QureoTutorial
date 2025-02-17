# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 5; index++) {
        hiragana_agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
        }
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(DOWN, 1)
        for (let index = 0; index < 3; index++) {
            hiragana_agent.place(UP)
            hiragana_agent.move(BACK, 1)
        }
        hiragana_agent.place(UP)
        hiragana_agent.move(FORWARD, 3)
        hiragana_agent.move(DOWN, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    hiragana_agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 3)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(BACK, 2)
    hiragana_agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(DOWN, 1)
        }
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    hiragana_agent.move(DOWN, 3)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.move(FORWARD, 2)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(UP)
        hiragana_agent.move(BACK, 1)
    }
    hiragana_agent.place(UP)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    hiragana_agent.place(UP)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.move(BACK, 1)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(UP, 2)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.setSlot(5)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(BACK, 1)
    }
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            hiragana_agent.setSlot(2)
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            hiragana_agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.place(DOWN)
        }
        hiragana_agent.turn(LEFT_TURN)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(BACK, 1)
            hiragana_agent.place(FORWARD)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(RIGHT, 1)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.turn(LEFT_TURN)
        for (let index = 0; index < 5; index++) {
            hiragana_agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            hiragana_agent.setSlot(2)
            hiragana_agent.place(DOWN)
        }
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.setSlot(3)
        for (let index = 0; index < 7; index++) {
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.move(BACK, 1)
            hiragana_agent.place(FORWARD)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.turn(LEFT_TURN)
    }
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.setSlot(3)
    for (let index = 0; index < 3; index++) {
        agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.place(DOWN)
            hiragana_agent.move(BACK, 1)
        }
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(FORWARD, 1)
            hiragana_agent.place(DOWN)
        }
    }


```

```template
    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 5; index++) {
        hiragana_agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
        }
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(DOWN, 1)
        for (let index = 0; index < 3; index++) {
            hiragana_agent.place(UP)
            hiragana_agent.move(BACK, 1)
        }
        hiragana_agent.place(UP)
        hiragana_agent.move(FORWARD, 3)
        hiragana_agent.move(DOWN, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    hiragana_agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 3)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(BACK, 2)
    hiragana_agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(DOWN, 1)
        }
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    hiragana_agent.move(DOWN, 3)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.move(FORWARD, 2)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(UP)
        hiragana_agent.move(BACK, 1)
    }
    hiragana_agent.place(UP)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    hiragana_agent.place(UP)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.move(BACK, 1)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(UP, 2)
    hiragana_agent.turn(RIGHT_TURN)
    hiragana_agent.setSlot(5)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(BACK, 1)
    }
    hiragana_agent.place(FORWARD)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            hiragana_agent.setSlot(2)
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            hiragana_agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.place(DOWN)
        }
        hiragana_agent.turn(LEFT_TURN)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(BACK, 1)
            hiragana_agent.place(FORWARD)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(RIGHT, 1)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.turn(LEFT_TURN)
        for (let index = 0; index < 5; index++) {
            hiragana_agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            hiragana_agent.setSlot(2)
            hiragana_agent.place(DOWN)
        }
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.setSlot(3)
        for (let index = 0; index < 7; index++) {
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.move(BACK, 1)
            hiragana_agent.place(FORWARD)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.turn(LEFT_TURN)
    }
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.setSlot(3)
    for (let index = 0; index < 3; index++) {
        agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.place(DOWN)
            hiragana_agent.move(BACK, 1)
        }
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(FORWARD, 1)
            hiragana_agent.place(DOWN)
        }
    }
```