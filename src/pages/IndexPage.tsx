import React from "react";
import styles from "./IndexPage.module.scss";
import { bio, Section } from "../constants/bio";
import { TheHeader } from "../components/TheHeader/TheHeader";
import { TheFooter } from "../components/TheFooter/TheFooter";
import { ContainerContent } from "../components/ContainerContent/ContainerContent";
import { ViewerHtml } from "../components/ViewerHtml/ViewerHtml";
import { ViewerImages } from "../components/ViewerImages/ViewerImages";
import { ViewerList } from "../components/ViewerList/ViewerList";
import { ViewerLinks } from "../components/ViewerLinks/ViewerLinks";

export const IndexPage: React.FC = () => {
  const renderSection = (section: Section): JSX.Element => {
    if (section.type === "html") return <ViewerHtml html={section.html} />;
    if (section.type === "list") return <ViewerList list={section.list} />;
    if (section.type === "links") return <ViewerLinks links={section.links} />;
    if (section.type === "images")
      return <ViewerImages images={section.images} />;
    throw new Error("bio.ts is not correct");
  };

  return (
    <div className={styles.container}>
      <TheHeader {...bio.header} />

      {bio.sections.map(section => (
        <ContainerContent
          title={section.title}
          description={section.description}
        >
          {renderSection(section)}
        </ContainerContent>
      ))}

      <TheFooter {...bio.footer} />
    </div>
  );
};
