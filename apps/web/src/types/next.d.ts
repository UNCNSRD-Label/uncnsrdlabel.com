export type LayoutProps = {
  params: { handle: string; id: string; lang: Intl.BCP47LanguageTag };
};

export type PageProps = {
  params: { handle: string; id: string; lang: Intl.BCP47LanguageTag };
  searchParams?: { [key: string]: string | string[] | undefined };
};
