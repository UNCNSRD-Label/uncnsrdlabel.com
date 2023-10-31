import CodeForm from "@/components/code-form";
import SignupForm from "@/components/signup-form";
import Image from "next/image";

export default function AccessRootPage() {
  return (
    <div className="grid min-h-[100dvh] w-full content-center justify-items-center gap-12 py-12">
      <h1 className="fill-hotPink w-5/6 max-w-7xl">
        <Image
          alt="UNCNSRD logo"
          src="/images/logos/logotype-hotpink-embossed.png"
          className=""
          title="UNCNSRD"
          height={400}
          width={1800}
        />
      </h1>

      <CodeForm className="" />

      <SignupForm className="" />
    </div>
  );
}
