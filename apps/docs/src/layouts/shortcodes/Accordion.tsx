import DynamicIcon from "@/helpers/DynamicIcon";
import React, { useState } from "react";

const Accordion = ({
  wrapper,
  title,
  children,
}: {
  wrapper?: string;
  title: string;
  children: string;
}) => {
  const [show, setShow] = useState(false);
  const value = JSON.parse(JSON.stringify(children)).props.value;

  return (
    <div className="accordion-container">
      <div
        className={`accordion accordion-2 ${show && "active"} `}
        onClick={() => setShow(!show)}
      >
        <button
          className="accordion-header flex items-center w-full justify-between"
          data-accordion
        >
          {title}
          <svg
            className="accordion-icon"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18.6666V14V9.33331"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6668 14L14.0002 14L9.3335 14"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="accordion-icon collapsed"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.6668 14L14.0002 14L9.3335 14"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <DynamicIcon
            icon="FaChevronDown"
            className={`dynamic-icon w-4 h-3 transition-all  ease-in-out mr-1 ${
              show ? "rotate-0" : "-rotate-90"
            }`}
          />
        </button>
        <div
          className="accordion-content"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
    </div>
  );
};

export default Accordion;
