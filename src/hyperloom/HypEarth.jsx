import { Link } from "react-router-dom";
import logo from "../img/siderealismlogo-128.png";

export default function HypEarth({ hyperloomBig, setHyperloomBig }) {
  const toggleBig = () => setHyperloomBig((currBig) => !currBig);
  return (
    <div id={"hyp-earth"}>
      <button onClick={toggleBig}>
        {hyperloomBig ? '(go small ►◄)':'(go big ◄►)'}
      </button>
      <Link className="hl-link" href={"index.html"}>
        <img id={"hyp-logo"} src={logo} alt={"Siderealism Logo"} />
      </Link>
    </div>
  );
}
