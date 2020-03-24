import React from "react";
import styles from "./ViewerList.module.scss";

export type Props = {
  list: {
    title: string;
  }[];
};

export const ViewerList: React.FC<Props> = (props: Props) => (
  <ul className={styles.container}>
    {props.list.map(content => (
      // crearfix
      <li key={content.title} className={styles.list}>
        <div className={styles.title}>{content.title}</div>
      </li>
    ))}
  </ul>
);
