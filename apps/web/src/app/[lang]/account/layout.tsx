import { server } from "@/clients/shopify";
import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import {
  getFragmentData,
  imageFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import Link from "next/link";
import { Suspense, isValidElement } from "react";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
  params: { handle: string };
}) {
  const segment =
    isValidElement(children) && children.props.childProp
      ? children.props.childProp.segment
      : undefined;

  const routeMetaObject = await server.getRouteMetaObject({
    handle: `account_${segment}`,
  });

  const routeMenu = await server.getMenu({ handle: "account" });

  return (
    <>
      <Navbar sticky>
        <NavbarContent />
      </Navbar>
      <Suspense>
        <div className="account min-h-fullMinusNavbar mx-8 grid max-w-[100dvw] gap-16 md:mx-0 md:grid-cols-[2fr_3fr]">
          <nav className="md:min-h-fullMinusNavbar relative hidden content-start md:grid md:justify-center">
            {routeMenu.items.length ? (
              <dl className="grid content-start gap-4 md:sticky md:top-64 md:mb-64">
                <dt className="text-sm uppercase">Account</dt>
                {routeMenu.items.map((item, index) => (
                  <dd key={item.title || index}>
                    <Link
                      href={item.url ?? "#"}
                      className={cn(
                        "sm:text-xxs text-xs uppercase transition duration-150 ease-in-out",
                        {
                          "underline decoration-dotted underline-offset-8":
                            item.url?.endsWith(segment),
                        },
                      )}
                    >
                      {item.title}
                    </Link>
                  </dd>
                ))}
              </dl>
            ) : null}

            {routeMetaObject.fields.map((field) => {
              if (field.__typename === "MetaobjectField") {
                if (field.reference?.__typename === "MediaImage") {
                  console.log(field.reference);
                  const image = getFragmentData(
                    imageFragment,
                    field.reference.image,
                  );

                  if (!image?.url) {
                    return null;
                  }

                  return (
                    <figure className="absolute inset-0">
                      <Image
                        alt={field.reference.alt ?? image.altText ?? ""}
                        className="object-cover"
                        fill
                        src={image?.url}
                      />
                    </figure>
                  );
                }
              }
            })}
          </nav>
          <article className="grid mb-48 place-content-center">{children}</article>
        </div>
      </Suspense>
      <Logo />
    </>
  );
}
