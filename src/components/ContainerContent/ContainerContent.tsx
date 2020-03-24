import React from "react";
import styles from "./ContainerContent.module.scss";

export type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const ContainerContent: React.FC<Props> = (props: Props) => (
  <section className={styles.container}>
    <h1 className={styles.title}>{props.title}</h1>
    <p className={styles.description}>{props.description}</p>
    {props.children}
  </section>
);
