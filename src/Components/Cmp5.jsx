import React from "react";

export default function Cmp5() {
  return (
    <div
    style={{
          height: "100vh",
          background: "linear-gradient(to left, #181818 0%, rgba(0,255,255,0.15) 100%)",
          overflow: "hidden",
        }}>
      <div
        style={{
          width: "100vw",
          height: "25vh",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          background: "linear-gradient(to left, #181818 0%, rgba(0,255,255,0.15) 100%)",
        }}
      >
        <img src="./src/assets/image.png" alt="Design" style={{
            width: '100vw',
            mixBlendMode: 'multiply',
            opacity: '0.6',
        }}/>
      </div>

      <div className="grid grid-cols-2 w-[90vw] mx-auto mt-12">
        <div>
            <img src="./src/assets/diamond-removebg-preview.png" alt="Diamond image" className="mx-auto" style={{width: '450px', height: '450px',height: '350px',
 }}/>
        </div>
        <div className="mx-auto w-[25vw] text-3xl text-white">with a heritage of craftsmanship and innovation, we spacialize in creating jwelery that reflects sophistication and meaning. from ethically sourced diamonds to exquisite custom designs, our commitment is to deliver beauty that lasts forever. </div>
      </div>
    </div>
  );
}