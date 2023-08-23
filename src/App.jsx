import { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Home";
import { register } from "swiper/element/bundle";

function App() {
  useEffect(() => {
    register();
  }, []);

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
