"use server";

import { Logo } from "@/components/layout/logo/index";
import { NavbarContent } from "@/components/layout/navbar/content";
import { Navbar } from "@/components/layout/navbar/index";
import { LoadingSkeleton } from "@/components/loading/skeleton";
import { state$ } from "@/lib/store";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  getMenuHandler,
  getRouteMetaObjectHandler,
  imageFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import { Suspense, isValidElement } from "react";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
  params: { handle: string };
}) {
  const lang = state$.lang.get();

  const segment =
    isValidElement(children) && children.props.childPropSegment
      ? children.props.childPropSegment
      : undefined;

  const routeMetaObject = await getRouteMetaObjectHandler(
    {
      handle: `account_${segment}`,
    },
    lang,
  );

  const routeMenu = await getMenuHandler({ handle: "account" });

  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Suspense fallback={<LoadingSkeleton />}>
        <div className="account mx-8 grid min-h-[100dvh] max-w-[100dvw] gap-16 md:mx-0 md:grid-cols-[1fr_1fr]">
          <nav className="relative hidden place-content-center md:grid md:min-h-[100dvh] md:justify-center">
            {routeMenu.items.length ? (
              <dl className="relative z-10 grid content-start justify-items-center gap-4 rounded bg-white p-8">
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
                        alt={
                          field.reference.alt ??
                          image.altText ??
                          "Background image"
                        }
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
          <article className="mb-48 grid place-content-center">
            {children}
          </article>
        </div>
      </Suspense>
      <Logo />
    </>
  );
}
