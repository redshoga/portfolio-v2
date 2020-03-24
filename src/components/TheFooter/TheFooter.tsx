import React from "react";
import styles from "./TheFooter.module.scss";

export type Props = {
  imageUrl: string;
};

export const TheFooter: React.FC<Props> = (props: Props) => (
  <footer className={styles.container}>
    &copy; 2019 <img className={styles.image} src={props.imageUrl} alt="icon" />
  </footer>
);
