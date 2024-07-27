import React, { useEffect, useState } from "react";

const ChangeLogWrapper = ({ children }: { children: React.ReactNode }) => {
  const getSideBarData = JSON.parse(JSON.stringify(children));
  const sidebarData = Array.from(
    getSideBarData.props.value.matchAll(
      /<div\s+class="changelog[^"]*"\s+id="changelog"\s+data-version="([^"]+)"\s+data-date="([^"]+)"\s+data-status="([^"]+)"\s+data-status-value="([^"]+)"[^>]*>(.*?)<\/div>/gs,
    ),
    (match: RegExpMatchArray) => ({
      version: match[1],
      date: match[2],
      status: match[3],
      status_value: match[4],
      children: match[5],
    }),
  );
  const [currentHeading, setCurrentHeading] = useState<string>("");
  useEffect(() => {
    const handleScroll = () => {
      const allHeadings = document.querySelectorAll("h2");
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
    <section>
      <div className="container">
        <div className="row">
          <div className="hidden pt-8 lg:col-3 md:pr-10 md:pt-12 lg:block">
            <div className="changelog-link sticky top-[149px]">
              {sidebarData.map((item) => (
                <div
                  key={item.version}
                  className="relative block border-b border-b-border py-4 text-h5-md font-medium text-text first:pt-0 last-of-type:border-b-0 md:py-7 md:text-h5"
                >
                  <a
                    href={`#ch-${item.version}`}
                    className={`inset-0 after:absolute after:left-0 after:top-0 after:h-full after:w-full ${
                      currentHeading === item.version + " " + item.date
                        ? "active"
                        : ""
                    } `}
                  >
                    {item.version}{" "}
                    <span className="inline-block text-sm">({item.date})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-12 lg:col-9 lg:border-l lg:border-l-border lg:pl-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeLogWrapper;
