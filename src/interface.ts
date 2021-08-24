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