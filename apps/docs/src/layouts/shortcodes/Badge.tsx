import React from "react";

const Badge = ({ children }: { children: React.ReactNode }) => {
  return <div className="badge badge-gray font-primary">{children}</div>;
};

export default Badge;
