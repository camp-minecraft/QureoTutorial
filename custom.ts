/**
 * Custom blocks
 */
//% color=#0078d7 weight=400 icon="\uf007" block="ひらがな_プレイヤー"
namespace hiragana_player {

    //% blockId=hiragana_player_1
    //% block="チャットコマンド$onChat をにゅうりょくしたとき"
    //% onChat.defl=run
    export function hiragana_onchat(onChat: string = "run", handler: () => void): void {
        const workFlow = function () {
            handler();
        }
        player.onChat(onChat, workFlow)
    }

    //% blockId=hiragana_player_0
    //% block="じぶんを %pos=minecraftCreatePosition にテレポートさせる"
    export function teleport(pos: Position): void {
        return player.teleport(pos);
    }
}

/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf1e6" block="ひらがな＿エージェント"
namespace hiragana_agent {

    //% blockId=hiragana_agent_8
    //% block="エージェントをじぶんのいちにいどうする "
    export function teleportToPlayer(): void {
        return agent.teleportToPlayer();
    }

    //% blockId=hiragana_agent_7
    //% block="エージェントの $direction の　$kind  "
    export function agentInspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=hiragana_agent_6
    //% block="エージェントの  $direction　に　$kind  がある"
    export function agentDetect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }

    //% blockId=hiragana_agent_5
    //% block="エージェントを %t_pos=minecraftCreatePosition にテレポートさせる"
    export function tp(t_pos: Position): void {
        return agent.teleport(t_pos, NORTH);
    }

    //% blockId=hiragana_agent_4
    //% block="スロットばんごう $slot をセットする"
    export function setSlot(slot: number): void {
        return agent.setSlot(slot);
    }

    //% blockId=hiragana_agent_3
    //% block=" エージェントに $direction をはかいさせる"
    export function destory(direction: SixDirection): void {
        return agent.destroy(direction);
    }

    //% blockId=hiragana_agent_2
    //% block="エージェントに $direction へおかせる"
    export function place(direction: SixDirection): void {
        return agent.place(direction);
    }

    //% blockId=hiragana_agent_1
    //% block="エージェントのむきを $direction にかえる"
    export function turn(direction: TurnDirection): void {
        return agent.turn(direction);
    }


    //% blockID=hiragana_agent_0
    //% block="エージェントに $direction に $blocks ブロックいどうさせる"
    //% blocks.defl=1
    export function move(direction: SixDirection, blocks: number): void {
        return agent.move(direction, blocks);
    }
}

/**
 * Custom blocks
 */
//% color=#D83B01 weight=400 icon="\uf04b" block="エージェントチェック"
namespace agentInspectDetect {
    //% blockId=agentInspect_2
    //% block="エージェントにどんな $kind か、 $direction を確認させる"
    export function agentInspect(kind: AgentInspection, direction: SixDirection): number {
        return agent.inspect(kind, direction);
    }

    //% blockId=agentDetect_1
    //% block="エージェントに $kind があるか、 $direction を確認させる"
    export function agentDetect(kind: AgentDetection, direction: SixDirection): boolean {
        return agent.detect(kind, direction);
    }
}