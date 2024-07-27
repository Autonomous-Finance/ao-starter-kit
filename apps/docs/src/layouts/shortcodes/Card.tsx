import DynamicIcon from "@/helpers/DynamicIcon";
import React from "react";

const Card = ({
  title,
  content,
  label,
  link,
  icon,
  iconBg,
}: {
  title: string;
  content: string;
  label: string;
  link: string;
  icon: string;
  iconBg: string;
}) => {
  return (
    <div className="flex xl:col-6">
      <div className="flex flex-col items-start rounded-xl border border-border px-7 py-7 sm:rounded-2xl">
        <div className="mb-4 flex w-full items-center gap-5 border-b border-b-border pb-4">
          <div
            className="w-fit rounded-xl p-3 py-[16px] sm:rounded-2xl"
            style={{ backgroundColor: iconBg }}
          >
            <DynamicIcon icon={icon} className="h-7 w-7" />
          </div>
          <h3 className="text-h5 font-medium text-dark">{title}</h3>
        </div>
        <p className="mb-5 font-secondary text-h6 text-text">{content}</p>
        <a
          href={link}
          className="btn group mt-auto p-0 font-semibold text-secondary flex items-center"
        >
          {label}
          <span className="inline-block ml-1 transition-all duration-300 group-hover:ml-2">
            <svg
              width="21"
              height="14"
              viewBox="0 0 21 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6187 7.61872C20.9604 7.27701 20.9604 6.72299 20.6187 6.38128L15.0503 0.812816C14.7085 0.471107 14.1545 0.471107 13.8128 0.812816C13.4711 1.15452 13.4711 1.70854 13.8128 2.05025L18.7626 7L13.8128 11.9497C13.4711 12.2915 13.4711 12.8455 13.8128 13.1872C14.1545 13.5289 14.7085 13.5289 15.0503 13.1872L20.6187 7.61872ZM0 7.875H20V6.125H0V7.875Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Card;
