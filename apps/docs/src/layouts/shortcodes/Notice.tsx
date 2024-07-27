import React from "react";

function Notice({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`notices ${type}`}>
      <div className="notice-head">
        <p className="my-0 ml-1.5"> {children}</p>
      </div>
    </div>
  );
}

export default Notice;
