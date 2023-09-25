import CodeForm from "@/components/code-form";
import SignupForm from "@/components/signup-form";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-[100dvh] w-full grid content-center gap-12 py-12 justify-items-center">
      <h1 className="max-w-7xl w-5/6 fill-hotPink">
        <Image alt="UNCNSRD logo" src="/images/logos/logotype-hotpink-embossed.png" className="" title="UNCNSRD" height={400} width={1800}/>
      </h1>

      <CodeForm className="" />

      <SignupForm className="" />
    </div>
  );
}
