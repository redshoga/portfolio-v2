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
        // clearfix
        <li key={link.url} className={styles.list}>
          <a href={link.url}>
            <div className={styles.title}>{link.title}</div>
            {/* color-link */}
            <div className={styles.subTitle}>{link.subTitle}</div>
          </a>
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
