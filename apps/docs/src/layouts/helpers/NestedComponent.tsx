import React, { useState } from "react";
import DynamicIcon from "./DynamicIcon";

interface Page {
  root: string;
  child: Page[];
  pages: string[];
}

interface SidebarMenu {
  root: string;
  child: Page[];
  pages: string[];
}

interface SidebarProps {
  menuData: SidebarMenu[];
  pageData: any;
  rootPage: string;
  regular: string;
}

const NestedComponent: React.FC<SidebarProps> = ({
  menuData,
  pageData,
  rootPage,
  regular,
}) => {
  const resultArray = regular
    .split("/")
    .slice(0, regular.split("/").length - 1)
    .join("/")
    .split("/")
    .reduce((acc: string[], part) => {
      const prevPart = acc.length > 0 ? acc[acc.length - 1] : "";
      const currentPart = prevPart ? `${prevPart}/${part}` : part;
      return [...acc, currentPart];
    }, []);

  const [activeChild, setActiveChild] = useState<string[]>(resultArray);

  const [activeHeading, setActiveHeading] = useState<string[]>([
    pageData.find((item: any) => item.id.includes(rootPage)).id.split("/")[0],
  ]);

  // handle child
  const handleChild = (root: string, parentPath: string) => {
    if (activeChild.includes(`${parentPath}/${root}`)) {
      setActiveChild(
        activeChild.filter((item) => item !== `${parentPath}/${root}`),
      );
    } else {
      setActiveChild([...activeChild, `${parentPath}/${root}`]);
    }
  };

  const renderPages = (pages: string[], parentPath: string) => {
    return (
      <ul className={"group-[.active]:mt-4 group-[.active]:max-h-[1000px]"}>
        {pages?.map((page, index) => (
          <li key={index}>
            <a
              href={`/docs/${parentPath}/${page}`}
              className={` hover:border-l-theme-dark block border-l border-l-border py-[.5rem] pl-4 text-left font-light text-text transition-colors duration-300 hover:text-text sm:py-2.5  ${
                regular.includes(`${parentPath}/${page}`)
                  ? "border-l-theme-dark border-l py-1 pl-4 font-medium text-text sm:py-3"
                  : null
              }`}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderChildPages = (child: Page[] = [], parentPath: string) => {
    return child.map((page) => {
      return (
        <React.Fragment key={page.root}>
          <ul className={"mt-4 group-[.active]:max-h-[1000px]"}>
            <li>
              <button
                className={`has-sibling-child flex items-center hover:border-l-theme-dark border-l capitalize border-l-border pl-3 text-left font-light text-text transition-colors duration-300 hover:text-text ${
                  activeChild.includes(`${parentPath}/${page.root}`)
                    ? "border-l-theme-dark border-l font-medium text-text "
                    : null
                }`}
                onClick={() => handleChild(page.root, parentPath)}
              >
                {/* {active.split("/").includes(page.root) ? ( */}
                <DynamicIcon
                  icon="FaChevronDown"
                  className={`w-4 h-3 transition-all  ease-in-out mr-1 ${
                    activeChild.includes(`${parentPath}/${page.root}`)
                      ? "rotate-0"
                      : "-rotate-90"
                  }`}
                />
                {/* ) } */}
                {page.root}
              </button>

              {activeChild.includes(`${parentPath}/${page.root}`) &&
                page.pages.length > 0 &&
                renderPages(page.pages, `${parentPath}/${page.root}`)}
              {activeChild.includes(`${parentPath}/${page.root}`) &&
                page.child.length > 0 &&
                renderChildPages(page.child, `${parentPath}/${page.root}`)}
            </li>
          </ul>
        </React.Fragment>
      );
    });
  };

  const getTitle = (root: string) => {
    return pageData.find((item: any) => item.id.includes(root)).data.title;
  };
  const activeTitle = (root: string) => {
    if (activeHeading.includes(root)) {
      setActiveHeading(activeHeading.filter((item) => item !== root));
    } else {
      setActiveHeading([...activeHeading, root]);
    }
  };
  return (
    <ul className="sidebar-list">
      {menuData?.map((menuItem, index) => (
        <li key={index} className="active group relative">
          <div
            className="flex cursor-pointer select-none items-center gap-4"
            data-accordion=""
            onClick={() => activeTitle(menuItem.root)}
          >
            <h2
              className={`order-1 text-base font-medium group-[.active]:font-semibold sm:text-[20px] lg:text-[22px]`}
            >
              {getTitle(menuItem.root)}
            </h2>

            <div
              className={`order-0 flex h-[40px] w-[40px] items-center justify-center group-hover:bg-primary rounded-md bg-theme-light p-[10px] transition-colors duration-300  sm:h-[50px] sm:w-[50px] ${
                activeHeading.includes(menuItem.root)
                  ? " group-[.active]:bg-primary"
                  : null
              }`}
            >
              <img
                src="/images/icons/start.svg"
                loading="lazy"
                decoding="async"
                alt="icon"
                className="img h-5 w-5"
                width=""
                height=""
              />
            </div>
          </div>

          {activeHeading.includes(menuItem.root) && (
            <>
              {menuItem.pages.length > 0 &&
                renderPages(menuItem.pages, menuItem.root)}

              {menuItem.child.length > 0 &&
                renderChildPages(menuItem.child, menuItem.root)}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedComponent;
