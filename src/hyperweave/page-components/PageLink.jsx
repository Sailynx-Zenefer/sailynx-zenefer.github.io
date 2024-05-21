import { Link } from "react-router-dom";

export default function PageLink({endpoint, linkText}) {
  return (
    <Link to={endpoint}>
        {linkText}
    </Link>
  );
}
