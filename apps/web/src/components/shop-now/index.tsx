import { LogotypeIcon } from "@/components/icons/logotype";

export function Logos() {
  return (
    <div className="pointer-events-none relative inset-0 z-30 grid h-full justify-items-end overflow-hidden bg-black pr-32">
      <LogotypeIcon
        className={"w-6/12 fill-white"}
        style={{
          scale: 1.35,
          translate: "0 12.5%",
        }}
      />
    </div>
  );
}
