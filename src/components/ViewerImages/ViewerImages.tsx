import React from "react";
import styles from "./ViewerImages.module.scss";

export type Props = {
  images: {
    url: string;
    imageUrl: string;
    title: string;
    description: string;
  }[];
};

export const ViewerImages: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    {props.images.map(content => (
      <div key={content.title} className={styles.imageContainer}>
        <a href={content.url}>
          <img className={styles.image} src={content.imageUrl} alt="content" />
          <div className={styles.title}>{content.title}</div>
          <div>{content.description}</div>
        </a>
      </div>
    ))}
  </div>
);
