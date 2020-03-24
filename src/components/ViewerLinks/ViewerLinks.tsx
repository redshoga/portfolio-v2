import React from "react";
import styles from "./ViewerLinks.module.scss";

export type Props = {
  links: {
    url: string;
    title: string;
    subTitle?: string;
  }[];
  footerLink?: {
    content: string;
    url: string;
  };
};

export const ViewerLinks: React.FC<Props> = (props: Props) => (
  <div>
    <ul className={styles.container}>
      {props.links.map(link => (
        <li key={link.url} className={styles.list}>
          <div className={styles.title}>
            <a href={link.url}>{link.title}</a>
          </div>
          <div className={styles.subTitle}>
            <a href={link.url}>{link.subTitle}</a>
          </div>
        </li>
      ))}
    </ul>
    {props.footerLink && (
      <a href={props.footerLink.url} className={styles.footerLink}>
        {props.footerLink.content}
      </a>
    )}
  </div>
);
