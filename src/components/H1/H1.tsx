import { ReactNode } from "react";
import styles from "./H1.module.scss";

export default function H1({ children }: { children: ReactNode }) {
  return <h1 className={styles.heading}>{children}</h1>;
}
