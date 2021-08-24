import anime from "animejs";

export function flowUp(e: ViewObject) {
    anime({
        targets: e.target.element,
        translateY: [10, 0],
        opacity: [0, 1],
        easing: "easeInOutExpo"
    })
}