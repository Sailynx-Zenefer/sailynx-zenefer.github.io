import { Link } from "react-router-dom";

export default function HypAirLink({endpoint, linkText}) {
  return (
    <Link to={endpoint}>
      <button className={"hlbuttyellow"}>
        {linkText}
      </button>
    </Link>
  );
}


