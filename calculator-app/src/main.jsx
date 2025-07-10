import { createRoot } from "react-dom/client";
import Header from "./Header.jsx";
import Result from "./Result.jsx";
import Keypad from "./Keypad.jsx";


createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Result />
    <Keypad />
  </>
);
