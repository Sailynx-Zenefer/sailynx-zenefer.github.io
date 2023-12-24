import {useState} from 'react'

export default function Hyperweave({children}) {
  const [isBig, setIsBig] = useState(false);

  const toggleBig = () => setIsBig((currBig) => !currBig);

  return (
    <div id={"hyperweave"}>
            {/* <button onClick={toggleBig}>{isBig ? 'Small' : 'Big'}</button> */}
      {!isBig && children}
    </div>
  );
}

