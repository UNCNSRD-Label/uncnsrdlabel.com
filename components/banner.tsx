import { clsx } from "clsx";

export const Banner = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "grid snap-start place-content-center bg-hotPink p-7 uppercase text-light",
        className
      )}
    >
      <a href="/shop">Free shipping on order over $100</a>
    </div>
  );
};

export default Banner;
