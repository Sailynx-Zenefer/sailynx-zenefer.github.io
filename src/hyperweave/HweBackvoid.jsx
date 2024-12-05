import HwePage from "./HwePage";
import { Route, Routes } from "react-router-dom";

export default function HweBackvoid() {

  return (
    <div id={"hwbackground"}>
        <Routes>
          <Route path="*" element={<HwePage/>} />
          <Route path="hyperweave" element={<HwePage/>}>
            <Route path=":page_name" element={<HwePage/>}>
              <Route path=":sub_page_name" element={<HwePage/>} />
            </Route>
          </Route>
        </Routes>
    </div>
  );
}
