"use client";

import Image from "@/components/image";
import { cn } from "@uncnsrdlabel/lib";
import { useState } from "react";
// @ts-expect-error Module '"react-dom"' has no exported member 'experimental_useFormStatus'
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { SlEnvolope } from "react-icons/sl";
import { signUp } from "./actions";

export default function SignUp({ className }: { className?: string }) {
  const { pending } = useFormStatus();
  const [input, setInput] = useState<string>();

  return (
    <form
      action={signUp}
      className={cn(
        "grid gap-2 md:grid-flow-col md:grid-cols-3 [&:has(input:valid)>button]:opacity-100 w-full px-8 relative",
        className,
      )}
      onSubmit={() => setInput("Submitted")}
    >
      <div className="field md:col-start-2">
        <input
          autoComplete="true"
          className="w-full px-4 py-2 bg-transparent border-transparent border-b-white placeholder:text-white filter drop-shadow-md text-sm sm:text-base text-center focus:border-hotPink focus:ring-transparent focus:outline-transparent"
          enterKeyHint="send"
          name="email"
          placeholder="Sign up to our newsletter for access code"
          required
          type="email"
        />
        <button
          className="absolute right-0 mr-3 hidden md:block"
          disabled={pending}
        >
          <SlEnvolope />
        </button>
      </div>
      {/* <input
        type="tel"
        name="phone_number"
        placeholder="Sign up to our newsletter"
        className="w-full px-4 py-2"
      /> */}
      {/* <button
        className={cn(
          "btn btn-solid btn-sm opacity-0 md:col-start-3",
          pending ? "btn-pending" : "btn-normal",
        )}
        disabled={pending}
      >
        Get launch code
      </button> */}
      {input && (
        <output className="absolute bg-black inset-0 grid place-content-center text-center">
          <figure className="">
            <Image
              alt="Models on deckchairs"
              className=""
              fill
              priority
              quality={100}
              src="/images/MAV07179.jpeg"
            />
          </figure>

          <h1 className="">UNCNSRD</h1>

          <div className="">
            <p className="">Thank you for signing up!</p>
          </div>
        </output>
      )}
    </form>
  );
}
