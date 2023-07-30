import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Button from "./component/Button";
import Mssup from "./pages/Mssup";
import "./style.css";

export default function App() {
  return (
    // <>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Mssup />} />
    //     </Routes>
    //   </BrowserRouter>
    //   {/* <Button counter={1} />
    //   <Button counter={2} /> */}
    // </>
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-cyan-500 to-blue-200">
      <Mssup />
    </div>
  );
}
