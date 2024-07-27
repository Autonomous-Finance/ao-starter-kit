import React from "react";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="not-prose row gy-4 justify-center">{children}</div>;
};

export default CardContainer;
