### @hideIteration true
# TechkidsCAMP

## エージェントを動かしてみよう！

![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/move-tutorial.gif)
エージェントをダイヤモンドブロックの場所まで移動させよう！

![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/move-reset.gif)
スタートのとなりのボタンを押せばリセットできるよ！

```ghost
player.onChat("run", function () {
    agent.move(FORWARD, 1)
})
```

```template
player.onChat("run", function () {})
```