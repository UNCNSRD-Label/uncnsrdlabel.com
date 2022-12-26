import { FC } from "react";

import styles from "./index.module.css";

interface ErrorProps {
  message?: string;
  statusCode: number;
}

export const Error: FC<ErrorProps> = ({ message, statusCode = 404 }) => {
  let feedback = message;

  if (!message) {
    if (statusCode === 500) {
      feedback = "Internal server error";
    }

    if (statusCode === 404) {
      feedback = "Not found";
    }

    if (statusCode === 400) {
      feedback = "Bad request";
    }
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.statusCode}>{statusCode}</h1>
      <span>{feedback}</span>
    </div>
  );
};

export default Error;
