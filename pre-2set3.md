### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

こんかいは``||loops.くりかえし||``ブロックをつかうよ！なんかいくりかえせばよさそうかな？「くりかえし」のなかのすうじをかえてみよう！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
for (let index = 0; index < 4; index++) {
    
}
agent.place(FORWARD)
agent.move(FORWARD, 1)
```

```template
for (let index = 0; index < 1; index++) {
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
}
```