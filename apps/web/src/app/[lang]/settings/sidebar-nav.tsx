"use client";

import { Link } from "@uncnsrdlabel/components/atoms/link";
import { buttonVariants } from "@uncnsrdlabel/components/ui/button";
import { cn } from "@uncnsrdlabel/lib";
import { usePathname } from "next/navigation";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
          href={item.href}
          key={item.href}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
