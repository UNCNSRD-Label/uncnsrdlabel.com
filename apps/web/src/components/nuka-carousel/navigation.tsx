"use client";

import clsx from 'clsx';
import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { graphql, useHygraphGraphQL } from "@/utils/hygraph";

export const dashboardMenuQueryDocument = graphql(/* GraphQL */ `
  query dashboardMenu($slug: String!) {
    menuModel(where: { slug: $slug }) {
      createdAt
      id
      publishedAt
      slug
      subtitle
      title
      updatedAt
      pageModels {
        id
        title
        slug
      }
    }
  }
`);

export const variables = { slug: "dashboard" };
  
export type NavigationRef = HTMLDivElement;

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement>{
  id?: string;
}

export const Navigation = forwardRef<NavigationRef, NavigationProps>(({ className, id, ...props }, forwardedRef) => {
  const { data = {} } = useHygraphGraphQL(
    dashboardMenuQueryDocument,
    variables,
  );

  const { menuModel } = data;

  return (
    <Accordion
      // {...props}
      className={clsx("mt-8 max-w-[100dvw]", className)}
      id={id}
      ref={forwardedRef}
      type="multiple"
      defaultValue={["dashboard"]}
    >
      {menuModel?.pageModels.filter(Boolean).map((pageModel, index) => (
        <AccordionItem key={index} value={pageModel.id}>
          <AccordionTrigger>
            <AccordionHeader className="text-sm">
              {pageModel?.title}
            </AccordionHeader>
          </AccordionTrigger>
          <AccordionContent className="collapsible-content prose prose-sm overflow-x-auto dark:prose-invert">
            <pre className="w-max-[calc(100%_-_4rem)]">
              <code>{JSON.stringify(pageModel, null, 2)}</code>
            </pre>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
});

export default Navigation;