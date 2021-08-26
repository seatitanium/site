import anime from 'animejs';
import axios, { AxiosResponse } from 'axios';

export function flowUp(e: ViewObject) {
	anime({
		targets: e.target.element,
		translateY: [10, 0],
		opacity: [0, 1],
		easing: 'easeInOutExpo'
	});
}

export function flowUpQuick(e: ViewObject) {
	anime({
		targets: e.target.element,
		translateY: [10, 0],
		opacity: [0, 1],
		easing: 'easeInOutExpo',
		duration: 300
	});
}

export function scaleIn(e: ViewObject) {
	anime({
		targets: e.target.element,
		scale: [0, 1],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		duration: 1750
	});
}

export function get(url: string) {
	return new Promise<AxiosResponse<BackendResponse>>((re, rj) => {
		axios
			.get(url)
			.then(r => re(r))
			.catch(e => rj(e));
	});
}

export function isPC() {
	var agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
	for (let v in agents) {
		if (navigator.userAgent.includes(v)) {
			return false;
		}
	}
	return true;
}
