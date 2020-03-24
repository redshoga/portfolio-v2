import React from "react";

export type Props = {
  html: string;
};

export const ViewerHtml: React.FC<Props> = (props: Props) => (
  <div
    dangerouslySetInnerHTML={{
      __html: props.html
    }}
  />
);
