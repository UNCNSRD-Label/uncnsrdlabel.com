export function onLoad(target: HTMLImageElement) {
	target.dataset.status = 'loaded';
}

export function onLoading(target: HTMLImageElement) {
	target.dataset.status = 'loading';
}
