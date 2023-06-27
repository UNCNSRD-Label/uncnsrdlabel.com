"use client";

import * as Slider from "@radix-ui/react-slider";
import clsx from "clsx";
import Image from "components/image";
import { useRef } from "react";
import QuickPinchZoom from "react-quick-pinch-zoom";

export function ProductImageZoom({
  active,
  className,
  isInteractive = true,
  ...props
}: {
  active?: boolean;
  className?: string;
  isInteractive?: boolean;
  scale?: number;
} & React.ComponentProps<typeof Image>) {
  const figureRef = useRef<HTMLElement>(null);

  // const [scale, setScale] = useState(1);

  if (!props.src) {
    return null;
  }

  const isTouch = () =>
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <>
      <QuickPinchZoom
        // `onUpdate` is one required prop
        onUpdate={({ scale, x, y }) => {
          // console.log(" --- onUpdate", { scale, x, y });
          if (figureRef.current) {
            figureRef.current.style.scale = scale.toString();
            figureRef.current.style.translate = `${x}px ${y}px`;
          }
        }}
        isTouch={isTouch}
        inertia={true}
        inertiaFriction={0.96}
        tapZoomFactor={1}
        zoomOutFactor={1.3}
        animationDuration={250}
        maxZoom={5}
        minZoom={1}
        enforceBoundsDuringZoom={true}
        centerContained={true}
        draggableUnZoomed={true}
        doubleTapZoomOutOnMaxScale={false}
        doubleTapToggleZoom={false}
        lockDragAxis={false}
        setOffsetsOnce={false}
        verticalPadding={0}
        horizontalPadding={0}
        onZoomStart={() => console.log(" --- onZoomStart")}
        onZoomEnd={() => console.log(" --- onZoomEnd")}
        onZoomUpdate={() => console.log(" --- onZoomUpdate")}
        onDragStart={() => {
          // console.log(" --- onDragStart");
          if (figureRef.current) {
            figureRef.current.classList.add("dragging");
          }
        }}
        onDragEnd={() => {
          // console.log(" --- onDragEnd");
          if (figureRef.current) {
            figureRef.current.classList.remove("dragging");
          }
        }}
        onDragUpdate={() => console.log(" --- onDragUpdate")}
        onDoubleTap={() => console.log(" --- onDoubleTap")}
      >
        <figure
          className={clsx(
            "relative w-[100dvw] cursor-grab [&.dragging]:cursor-grabbing",
            className
          )}
          ref={figureRef}
        >
          <Image
            className={clsx("relative block h-full w-full object-cover", {
              "transition duration-300 ease-in-out": isInteractive,
            })}
            {...props}
            alt={props.title || ""}
          />
        </figure>
      </QuickPinchZoom>
      <Slider.Root
        className="fixed inset-x-8 bottom-8 flex h-5 touch-none select-none items-center sm:start-auto sm:w-48"
        defaultValue={[1]}
        max={5}
        min={1}
        step={0.05}
        onValueChange={(value) => {
          setScale(value[0] ?? 1);
        }}
      >
        <Slider.Track className="relative h-[3px] grow rounded-full bg-white/50 drop-shadow">
          <Slider.Range className="absolute h-full rounded-full bg-white " />
        </Slider.Track>
        <Slider.Thumb
          className="block h-5 w-5 cursor-grab rounded-[10px] bg-white shadow-[0_1px_10px] shadow-black/70 focus:cursor-grabbing focus:outline-none"
          aria-label="Volume"
        />
      </Slider.Root>
    </>
  );
}
