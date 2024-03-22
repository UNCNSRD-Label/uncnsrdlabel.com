export type LayoutProps = {
  params: { handle: string; id: string; lang: Navigator['language'] };
};

export type PageProps = {
  params: { handle: string; id: string; lang: Navigator['language']; };
  searchParams?: { [key: string]: string | string[] | undefined };
};
