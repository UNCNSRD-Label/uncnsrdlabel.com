import { clsx } from "clsx";

import { SignUpForm } from "@uncnsrdlabel/ui/components/sign-up/form.js";

export function SignUp({ className }: { className?: string }) {
  return (
    <section className={clsx("grid gap-4", className)}>
      <h3 className="text-sm uppercase">Sign up to our newsletter</h3>
      <span className="text-xs">
        Sign up and receive 10% off your first purchase
      </span>
      <SignUpForm />
    </section>
  );
}