import fs from "fs";
import path from "path";

// get docs page path
export const getDocsSinglePage = (folder: string) => {
  const filesPath = fs.readdirSync(folder);
  const getPathData: any = filesPath.map((file) => {
    const filePath = path.join(folder, file);
    const stats = fs.statSync(filePath);
    const isFolder = stats.isDirectory();
    if (!file.includes("md")) {
      if (isFolder) {
        return {
          root: file,
          child: getDocsSinglePage(filePath),
          pages: fs
            .readdirSync(filePath)
            .filter((item) => !item.includes("-index"))
            .filter((file) => file.includes("md"))
            .map((item) => {
              const lastDotIndex = item.lastIndexOf(".");
              if (lastDotIndex !== -1) {
                return item.substring(0, lastDotIndex);
              } else {
                return item; // If there is no dot, return the original string
              }
            }),
        };
      } else {
        return {
          root: file,
          child: [],
        };
      }
    }
  });

  return getPathData;
};

// generate breadcrumbs path
export const generateBreadCrumbsSlug = (folder: string, path: string) => {
  try {
    const pathArray = path.split("/");
    const filterFilesPath = pathArray.slice(0, pathArray.length - 1);

    let outputPath = "";
    const outputPaths = [];
    for (const item of filterFilesPath) {
      outputPath = `${outputPath ? outputPath : folder}/${item}`;

      outputPaths.push({
        path: item,
        link: outputPath,
      });
    }
    const getPathData: any = outputPaths.map((file) => {
      const filesPath = fs.readdirSync(file.link);
      const removeIndex = filesPath.filter((item) => !item.includes("-index"));
      const getFile = removeIndex.filter((item) => item.includes("md"))[0];
      const removeEmptyItem = file.link.split("/").filter((item) => item);
      return {
        path: file.path,
        link: `${removeEmptyItem
          .slice(2, removeEmptyItem.length)
          .join("/")}/${getFile}`,
      };
    });
    return getPathData;
  } catch (error) {
    console.log(error);
  }
};
