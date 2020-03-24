import React from "react";
import styles from "./TheHeader.module.scss";

export type Props = {
  title: string;
  imageUrl: string;
  links: {
    title: string;
    url: string;
  }[];
};

export const TheHeader: React.FC<Props> = (props: Props) => (
  <div className={styles.theHeader}>
    <div className={styles.box}>
      <img className={styles.image} src={props.imageUrl} alt={"icon"} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.urlsContainer}>
        {props.links.map(link => (
          <a key={link.url} href={link.url}>
            <div>{link.title}</div>
          </a>
        ))}
      </div>
    </div>
  </div>
);
