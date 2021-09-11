interface ViewObject {
    percentCenter: number,
    percentInView: number,
    percentTop: number,
    scrollPercent: 0,
    scrollValue: 0,
    target: ViewObjectTarget,
    type: "enter" | "exit" | "progress"
}

interface ViewObjectTarget {
    classes: Dictionary,
    element: HTMLElement,
    percent: number,
    rect: DOMRect
}

interface Dictionary {
    [prop: string]: any
}

interface ServerInformation {
    mods: ServerMod[],
    version: string,
    since: string,
    bestram: number,
    term: string,
    ip: string,
    online: boolean,
    onlinePlayers: number,
    maxPlayers: number,
    motd: string,
    onlinePlayersDetails: PlayerDetail[],
    rawMods: RawMod[],
    created: boolean
}

interface InstanceInformation {
    bandwidth: number,
    datadisk: InstanceDisk,
    systemdisk: InstanceDisk,
    type: string,
    zone: string
}

interface InstanceDisk {
    size: number,
    type: string
}

interface PlayerDetail {
    id: string,
    name: string
}

interface RawMod {
    modId: string,
    modmarker: string
}

interface ServerMod {
    type: string,
    zh?: string,
    name: string,
    desc?: string,
    count?: number,
    bg?: string
}

interface BackendResponse {
    data: null | Object,
    status: "ok" | "ng" | "http-error" | "error" | null,
    msg?: string
}