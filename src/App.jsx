import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import Aos from "aos";


function App() {

  
  useEffect(() => {
    Aos.init({
      duration: 700,
      delay: 100,
    });
  });

  return (
   
      <HomePage />

  );
}

export default App;
