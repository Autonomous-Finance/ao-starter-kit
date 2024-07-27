import React from "react";

const Changelog = ({
  date,
  version,
  status,
  status_value,
  children,
}: {
  date: string;
  version: string;
  status: string;
  status_value: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="changelog mb-12"
      id="changelog"
      data-version={version}
      data-date={date}
      data-status={status}
      data-status-value={status_value}
    >
      <div className="changelog-item" id={`ch-${version}`}>
        <h2 className="changelog-title">{`${version} ${date}`}</h2>
        <div className={`badge ${status}`}>{status_value}</div>
        <div
          className="changelog-content"
          dangerouslySetInnerHTML={{ __html: children.props.value }}
        />
      </div>
    </div>
  );
};

export default Changelog;
