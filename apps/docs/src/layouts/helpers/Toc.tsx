import React, { useEffect, useState } from "react";

interface TocItemProps {
  item: {
    depth: number;
    slug: string;
    text: string;
    children?: TocItemProps[];
  };
}

const TocItem: React.FC<any> = ({ item }) => {
  const { depth, slug, text } = item;

  // scroll lifting effect for the table of contents
  const [currentHeading, setCurrentHeading] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const allHeadings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      let foundHeading = "";

      const headingsArray = Array.from(allHeadings).reverse();

      headingsArray.forEach((heading) => {
        const headingRect = heading.getBoundingClientRect();
        if (
          headingRect.top >= 0 &&
          headingRect.bottom <= window.innerHeight &&
          document.elementFromPoint(
            window.innerWidth / 2,
            headingRect.top + 1,
          ) === heading
        ) {
          foundHeading = heading.textContent || "";
        }
      });

      setCurrentHeading(foundHeading);
      if (window.scrollY < 100) {
        setCurrentHeading("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <li style={{ marginLeft: `${depth - 1}rem` }}>
      <a href={`#${slug}`} className={currentHeading === text ? "active" : ""}>
        {text}
      </a>
      {depth > 1 && item.children && (
        <ol>
          {item.children?.map((child: any, index: number) => (
            <TocItem key={index} item={child} />
          ))}
        </ol>
      )}
    </li>
  );
};

interface TableOfContentsProps {
  tocItems?: TocItemProps[];
}

const TableOfContents: React.FC<any> = ({ tocItems }) => {
  return (
    <div className="hidden w-[350px] lg:pl-[28px] lg:block">
      <div className="cs-scrollbar sticky top-[105px] max-h-[calc(100vh-100px)] overflow-auto pt-10 lg:block 2xl:block overflow-y-auto">
        <div id="toc-wrapper">
          <div className="toc-heading">
            <h2 className="text-h5 font-medium">Table of Contents</h2>
          </div>
          <nav id="TableOfContents">
            <ol>
              {tocItems?.map((item: any, index: number) => (
                <TocItem key={index} item={item} />
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
