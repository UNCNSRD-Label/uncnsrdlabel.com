import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb as BreadcrumbRoot,
} from "@uncnsrdlabel/components/atoms/breadcrumb";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { cn } from "@uncnsrdlabel/lib";

export function Breadcrumb({
  className,
  currentPage,
}: {
  className?: string;
  currentPage?: {
    handle: string;
    title: string;
  };
}) {
  return (
    <BreadcrumbRoot
      className={cn(
        "absolute left-12 top-5 z-50 hidden lg:grid lg:grid-cols-12 [&>*]:lg:col-start-2 [&>*]:lg:col-end-10 text-white",
        className,
      )}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} className="flex items-center gap-2" href="/">
          <span className="font-bold">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage={!!currentPage === false}>
        <BreadcrumbLink as={Link} href="/account">
          Account
        </BreadcrumbLink>
      </BreadcrumbItem>
      {!!currentPage && (
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} href={`/account/${currentPage.handle}`}>
            {currentPage.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </BreadcrumbRoot>
  );
}
