"use client";

import { createIntl } from "@formatjs/intl";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
  type CarouselOptions,
} from "@uncnsrdlabel/components/atoms/carousel";
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import { Children, PropsWithChildren, Usable, isValidElement, use, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function MediaViewer({
  children,
  className,
  dictionary,
  lang,
  title,
}: PropsWithChildren<{
  className?: string;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Navigator['language'];
  title: string;
}>) {
  const opts = {
    align: "start",
    dragFree: true,
    loop: true,
  } satisfies CarouselOptions;

  const [api, setApi] = useState<CarouselApi>();

  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const thumbnailClassName =
    "pointer-events-auto relative my-auto aspect-square w-full overflow-hidden rounded-full shadow bg-black/50";

  const arrayChildren = Children.toArray(children);

  return (
    <>
      <Carousel
        className={cn("landscape:h-[100dvh] [&_>_div]:h-full", className)}
        opts={opts}
        setApi={setApi}
      >
        <CarouselContent className="ml-0 h-full">{children}</CarouselContent>
        <CarouselPrevious className="lg:hidden left-4" title={intl.formatMessage({ id: "component.MediaViewer.CarouselPrevious" }, { title })} />
        <CarouselNext className="lg:hidden right-4" title={intl.formatMessage({ id: "component.MediaViewer.CarouselNext" }, { title })} />
      </Carousel>
      <nav className="pointer-events-none absolute left-8 top-0 z-30 hidden h-full w-16 grid-flow-row content-center gap-4 lg:grid">
        {arrayChildren.map((child, index) => {
          if (!isValidElement(child)) return null;

          if (child.props["data-thumbnail-enabled"] !== true) return null;

          return (
            <Button
              className={thumbnailClassName}
              key={child.props["data-thumbnail-id"]}
              onClick={() => {
                api?.scrollTo(index);
              }}
              title={intl.formatMessage({ id: "component.MediaViewer.title" }, { index: index + 1, title })}
            >
              <Image
                alt={intl.formatMessage({ id: "component.MediaViewer.alt" }, { index: index + 1, title })}
                blurDataURL={child.props["data-thumbnail-blur-data-url"]}
                fill
                sizes="5vw"
                src={child.props["data-thumbnail-src"]}
                style={{
                  objectFit: "cover",
                }}
              />
            </Button>
          );
        })}
      </nav>
    </>
  );
}
