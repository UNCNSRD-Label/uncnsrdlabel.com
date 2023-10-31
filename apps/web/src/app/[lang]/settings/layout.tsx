import { Separator } from "@uncnsrdlabel/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";
import { SidebarNav } from "./sidebar-nav";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/my-account",
  },
  {
    title: "Account",
    href: "/my-account/account",
  },
  {
    title: "Notifications",
    href: "/my-account/notifications",
  },
  {
    title: "Orders",
    href: "/my-account/orders",
  },
  {
    title: "Consent",
    href: "/my-account/consent",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  // TODO: Check user is signed in
  // const { data, isLoading, isInitialLoading } = useCustomer()

  // if (Boolean(!data?.id)) {
  //   // this is a protected route - only users who are signed in can view this route
  //   redirect("/signin");
  // }

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/my-account-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/my-account-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden justify-center space-y-6 p-10 pb-16 md:grid">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
