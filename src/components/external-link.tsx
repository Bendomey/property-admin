import * as React from "react";

interface Props {
  className: string;
  href: string;
}

const ExternalLink: React.FC<Props> = ({ className, href, children }) => {
  return (
    <React.Fragment>
      <a href={href} target={"_blank"} rel="noreferrer" className={className}>
        {children}
      </a>
    </React.Fragment>
  );
};

export default ExternalLink;
