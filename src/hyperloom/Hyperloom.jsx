import {useState} from 'react'

export default function Hyperloom({ children }) {
  const [isBig, setIsBig] = useState(false);

  const toggleBig = () => setIsBig((currBig) => !currBig);

  return (
    <div id={"hyperloom"}>
      {/* <button onClick={toggleBig}>{isBig ? "Small" : "Big"}</button> */}
      {!isBig && children}
    </div>
  );
}

