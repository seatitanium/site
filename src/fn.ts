import anime from "animejs";
import axios, { AxiosResponse } from "_axios@0.21.1@axios";

export function flowUp(e: ViewObject) {
    anime({
        targets: e.target.element,
        translateY: [10, 0],
        opacity: [0, 1],
        easing: "easeInOutExpo"
    })
}

export function get(url: string) {
    return axios.get(url);
}