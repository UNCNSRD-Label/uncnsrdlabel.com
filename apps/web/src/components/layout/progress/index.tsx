export function Progress() {
  return <div className="supports-not-[animation-timeline:view()]:hidden [animation-timeline:--page-scroll] animate-grow-progress bg-hotPink h-0.5 fixed inset-x-0 top-0 z-50 origin-left" />;
}

// animation: linear growProgress forwards;
// animation-timeline: --page-scroll;
// transform-origin: 0 50%;