import {Link} from 'react-router-dom'
import logo from '../img/siderealismlogo-128.png'

export default function HypEarth() {
    return (
      <div id={"hl-green"}>
      <Link className='hl-link' href={"index.html"}>
        <img
          id={"hllogo"}
          src={logo}
          alt={"Siderealism Logo"}
        />
      </Link>
    </div>
    )
}

