import { useState } from "react"
const imgs = import.meta.glob('../../img/*')

export default function ImgBox({imgName}) {
    const [img, setImg] = useState(null)
    imgs[`../../img/${imgName}`]()
    .then((mod) => {
        setImg(mod.default)
      })
    return (
        <div id={"hwimgbox"}>
            <img src={img}/>
        </div>
    )
    }
    
