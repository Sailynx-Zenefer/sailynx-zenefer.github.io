import { useState, useEffect } from "react";
const imgs = import.meta.glob('../../img/*');

export default function ImgBox({ imgName }) {
    const [img, setImg] = useState(null);
//     imgs[`../../img/${imgName}`]()
//     .then((mod) => {
//         setImg(mod.default)
//       })
//     return (
//         <div id={"hwimgbox"}>
//             <img src={img}/>
//         </div>

    
//above is original used chatgpt below because lazy
//apparently: "The error you are encountering occurs because imgs is an object with promises as values, and these promises resolve to modules. To fix the issue, you need to handle these promises correctly and ensure the module's default export (the image source) is used as the src for the img tag."


// Use import.meta.glob to import all images as promises
    useEffect(() => {
        const loadImage = async () => {
            try {
                const mod = await imgs[`../../img/${imgName}`]();
                setImg(mod.default);
            } catch (error) {
                console.error(`Error loading image: ${error}`);
            }
        };

        if (imgName) {
            loadImage();
        }
    }, [imgName]);

    return (
        <div id={"hwimgbox"}>
            {img ? <img src={img} alt={imgName} /> : <p>Loading...</p>}
        </div>
    );
}