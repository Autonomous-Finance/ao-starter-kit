import React, { useEffect, useRef } from "react";
const Code = ({
  children,
  extension,
  fileName,
}: {
  children: React.ReactNode;
  extension: string;
  fileName: string;
}) => {
  const code = JSON.parse(JSON.stringify(children)).props.value;
  const [clipboardVal, setClipboardVal] = React.useState("");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const data = document.querySelectorAll(".highlight");
    data.forEach((d) => {
      const copied = d.querySelector(".copy");
      copied!.addEventListener("click", () => {
        (copied as HTMLElement).innerText = "Copied";
        if (!navigator.clipboard) {
          setClipboardVal("");
          console.warn("Clipboard not supported");
          return false;
        }
        navigator.clipboard
          .writeText(d.querySelector("#code")?.textContent!)
          .then(() => setClipboardVal(d?.querySelector("#code")!?.textContent!))
          .catch((e) => {
            setClipboardVal("");
            console.warn("Clipboard error:" + e);
          });
      });
      setTimeout(() => ((copied as HTMLElement).innerText = "Copy"), 2000);
    });
    // Get the <code> element
  });

  return (
    <div className="highlight">
      <div className="relative">
        {fileName && <div className="file-name">{fileName}</div>}
        {extension && <span className="file-extension ">{extension}</span>}
        <span className="copy"> Copy</span>
      </div>

      <div id="code" ref={ref} dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
};

export default Code;
