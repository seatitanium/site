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
    term: string
}

interface ServerMod {
    type: string,
    zh?: string,
    name: string,
    desc?: string,
    count?: number
}

interface BackendResponse {
    data: null | Object,
    status: "ok" | "ng" | "http-error" | "error" | null
}