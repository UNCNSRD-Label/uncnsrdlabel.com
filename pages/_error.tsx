import type { NextPage } from "next";

import { Error } from "#/components/Error";

interface ErrorProps {
  statusCode: number;
}

export const Page: NextPage<ErrorProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

Page.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;

  return { statusCode };
};

export default Page;
