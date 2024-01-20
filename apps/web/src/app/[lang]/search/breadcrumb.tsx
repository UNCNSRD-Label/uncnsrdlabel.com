import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumb as BreadcrumbRoot,
} from "@uncnsrdlabel/components/atoms/breadcrumb";
import { Link } from "@uncnsrdlabel/components/atoms/link";

export function Breadcrumb({ className }: { className?: string }) {
  return (
    <BreadcrumbRoot className={className}>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} className="flex items-center gap-2" href="/">
          <span className="font-bold">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} href="/search/all">
          Shop
        </BreadcrumbLink>
      </BreadcrumbItem>
    </BreadcrumbRoot>
  );
}
