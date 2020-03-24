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
  <header className={styles.container}>
    <div className={styles.box}>
      <img className={styles.icon} src={props.imageUrl} alt={"icon"} />
      <div className={styles.title}>{props.title}</div>
      <nav className={styles.urlsContainer}>
        {props.links.map(link => (
          <a key={link.url} href={link.url} className={styles.link}>
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  </header>
);
