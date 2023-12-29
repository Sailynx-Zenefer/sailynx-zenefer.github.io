import "./cosmic-mumble.css";
import "./hyperloom.css";
import "./hyperweave.css";

import Hyperloom from "./hyperloom/Hyperloom";
import HypAir from "./hyperloom/HypAir";
import HypFire from "./hyperloom/HypFire";
import HypWater from "./hyperloom/HypWater";
import HypEarth from "./hyperloom/HypEarth";

import Hyperweave from "./hyperweave/Hyperweave";
import HweBackvoid from "./hyperweave/HweBackvoid";
import Space from "./space/Space";
import { useState } from "react";
import HypSubdiv from "./hyperloom/HypSubdiv";
import HypSwapGlow from "./hyperloom/HypSwapGlow";

export default function CosmicMumble() {
  const [hyperloomBig,setHyperloomBig] = useState(false)

  return (
    <div id={hyperloomBig ? "cosmic-mumble-big-loom" : "cosmic-mumble"}>
      <Hyperloom hyperloomBig={hyperloomBig}>
        <HypSubdiv>
          <HypWater />
          <HypEarth hyperloomBig={hyperloomBig} setHyperloomBig={setHyperloomBig}/>
          <HypFire />
        </HypSubdiv>
        <HypSwapGlow/>
        <HypAir />
      </Hyperloom>
      <Hyperweave>
        <HweBackvoid/>
      </Hyperweave>
      <Space />
    </div>
  );
}
