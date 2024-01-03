export const onLoad = (target: HTMLImageElement) => {
  target.dataset.status = "loaded";
};

export const onLoading = (target: HTMLImageElement) => {
  target.dataset.status = "loading";
};