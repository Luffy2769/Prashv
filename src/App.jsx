import "./App.css";
import AOS from "aos"; // Important libraries for scrolling animations
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Components/Header";
import Cmp1 from "./Components/Cmp1";
import Cmp2 from "./Components/Cmp2";
import Cmp3 from "./Components/Cmp3";
import Empty from "./Components/Empty";
import Cmp4 from "./Components/Cmp4";
import Cmp4$2 from "./Components/Cmp4$2";
import Cmp4$3 from "./Components/Cmp4$3";
import Cmp5 from "./Components/Cmp5";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Initialize AOS with a duration of 1000ms
      once: true, //Animate happens
    });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: "url(./src/assets/bgEarth.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Header />
        <Cmp1 />
      </div>
      <Empty />
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: "url(./src/assets/bgNature.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Cmp2 />
      </div>
      <Empty />
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: "url(./src/assets/bgMine.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
      <Cmp3 />
      </div>
      <Empty />
      <div data-aos="fade-up">
      <Cmp4 />
      </div>
      <div data-aos="fade-up">
      <Cmp4$2 />
      </div>
      <div 
      data-aos="fade-up"
      >
      <Cmp4$3 />
      </div>
      <Cmp5/>
    </>
  );
}

export default App;