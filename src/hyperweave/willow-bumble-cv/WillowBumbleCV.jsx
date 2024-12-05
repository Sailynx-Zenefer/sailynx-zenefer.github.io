import { useState } from "react";
import "./willow-bumble-cv.css";
import WillowBumbleCvMdx from "./willow-bumble-cv.mdx";
import { MDXProvider } from "@mdx-js/react";
const cvMdx = import.meta.glob("./willow-bumble-cv.mdx", { eager: true });
const components = ''
export default function WillowBumbleCV() {

  return (
    <div id="main-body">
      <MDXProvider components={components}>
        <div className={"cv-page"}>
          <WillowBumbleCvMdx />
        </div>
      </MDXProvider>
      {/* <text id ="test-text">boop</text> */}
    </div>
  );
}

