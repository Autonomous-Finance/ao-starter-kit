import React from "react";

export function Downloads() {
  const [downloads, setDownloads] = React.useState(null);

  React.useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch(
          "https://api.npmjs.org/downloads/point/last-year/create-ao-dapp"
        );
        const data = await response.json();
        setDownloads(data.downloads);
      } catch (error) {
        console.error("Error fetching downloads:", error);
      }
    }
    fetchDownloads();
  }, []);

  return <div>Already downloaded {downloads} times.</div>;
}
