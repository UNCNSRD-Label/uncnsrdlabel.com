import { SignUpForm } from "@/components/sign-up/form";
import { cn } from "@uncnsrdlabel/lib/classname.js";

export function SignUp({ className }: { className?: string }) {
  return (
    <section className={cn("grid gap-4", className)}>
      <h3 className="text-sm uppercase">Sign up to our newsletter</h3>
      <span className="text-xs">
        Sign up and receive 10% off your first purchase
      </span>
      <SignUpForm />
    </section>
  );
}
