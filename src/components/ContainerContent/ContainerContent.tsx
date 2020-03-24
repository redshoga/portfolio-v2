import React from "react";
import styles from "./ContainerContent.module.scss";

export type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const ContainerContent: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.description}>{props.description}</div>
    {props.children}
  </div>
);
