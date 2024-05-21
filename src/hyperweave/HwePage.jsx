import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HwePageGen from "./page-components/HwePageGen.mdx";
import { MDXProvider } from "@mdx-js/react";
const pages = import.meta.glob("./pages/*.mdx", { eager: true });
const wbPages = import.meta.glob("./pages/willow-bumble/*.mdx", { eager: true });
const szPages = import.meta.glob("./pages/sailynx-zenefer/*.mdx", { eager: true });
const pbPages = import.meta.glob("./pages/psytrus-beeshine/*.mdx", { eager: true });

export default function HwePage() {
  const [currPage, setCurrPage] = useState({
    name: "",
    path: "",
    subName: "",
    mdxPath: "",
  });

  let { page_name, sub_page_name } = useParams();
  let { pathname: page_location } = useLocation();
  
  const components = {};

  Object.keys(pages).forEach((key) => {
    components[key] = pages[key]
  });
  Object.keys(wbPages).forEach((key) => {
    components[key] = wbPages[key]
  });  Object.keys(szPages).forEach((key) => {
    components[key] = szPages[key]
  });  Object.keys(pbPages).forEach((key) => {
    components[key] = pbPages[key]
  });

  useEffect(() => {
    setCurrPage((currPage) => {
      const modPage = { ...currPage };
      modPage.name = page_name || "";
      modPage.path = page_location || "";
      modPage.subName = sub_page_name || "";
      modPage.mdxPath = "";
      if (modPage.subName.length > 0) {
        modPage.mdxPath = `${modPage.name}/${modPage.subName}`;
      } else {
        modPage.mdxPath = modPage.name;
      }
      return modPage;
    });
  }, [page_name, sub_page_name, page_location]);

  return (
    <MDXProvider components={components}>
    <div className={"hw-page"}>
      <HwePageGen page={currPage.mdxPath} components={components}/>
    </div>
    </MDXProvider>
  );
}
