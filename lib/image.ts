export const onLoadingComplete = (target: HTMLImageElement) => {
  target.classList.add("opacity-100");
  target.dataset.loaded = "true";
};
