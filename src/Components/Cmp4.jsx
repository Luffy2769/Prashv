import React from "react";

export default function Cmp4() {
  return (
    <div
      className=""
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "#181830",
        background:
          "linear-gradient(to left, #181818 0%, rgba(0,255,255,0.15) 100%)",
      }}
    >
      <h1 className="text-white text-6xl block ml-52 pt-52 mb-0 leading-none">
        Our collection
      </h1>
      <h1 className="text-white text-2xl block ml-52 pt-8 mb-0 leading-none">
        Engagement and wedding
      </h1>
      <span
        className="text-white text-[200px] ml-64 my-12 leading-none inline-block"
        style={{
          position: "relative",
          background:
            "radial-gradient(circle, rgba(0,255,255,0.3) 30%, transparent 70%)",
          borderRadius: "50%",
          padding: "60px", // Increase this for wider circle
        }}
      >
        01
      </span>
      <span className="text-white text-2xl ml-12 my-24 leading-none inline-block">
        Celebrate love with rings crafted to symbolize your forever.
      </span>
    </div>
  );
}
