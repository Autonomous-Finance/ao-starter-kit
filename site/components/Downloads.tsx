import React from "react";

export function Downloads() {
  const [downloads, setDownloads] = React.useState(null);

  const EXTERNAL_DOWNLOADS = 500;

  React.useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch(
          "https://api.npmjs.org/downloads/point/last-year/create-ao-dapp"
        );
        const data = await response.json();
        setDownloads(data.downloads + EXTERNAL_DOWNLOADS);
      } catch (error) {
        console.error("Error fetching downloads:", error);
      }
    }
    fetchDownloads();
  }, []);

  return <div>Already downloaded {downloads} times.</div>;
}
