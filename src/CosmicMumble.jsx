import "./cosmic-mumble.css";
import "./hyperloom.css";
import "./hyperweave.css";

import Hyperloom from "./hyperloom/Hyperloom";
import HypAir from "./hyperloom/HypAir";
import HypFire from "./hyperloom/HypFire";
import HypWater from "./hyperloom/HypWater";
import HypEarth from "./hyperloom/HypEarth";

import Hyperweave from "./hyperweave/Hyperweave";
import HweBorder from "./hyperweave/HweBorder";
import HweBackvoid from "./hyperweave/HweBackvoid";
import Space from "./space/Space";

export default function CosmicMumble() {
  return (
    <div id={"cosmic-mumble"}>
      <Hyperloom>
        <header>
          <HypWater />
          <HypEarth />
        </header>
        <HypAir />
        <HypFire />
      </Hyperloom>
      <Hyperweave>
        <HweBorder />
        <HweBackvoid/>
      </Hyperweave>
      <Space />
    </div>
  );
}
