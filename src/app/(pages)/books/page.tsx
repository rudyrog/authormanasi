import React from "react";

export default function Books() {
  return (
    <div>
      <div className="fodo px-3 py-6 text-8xl" style={{ color: "wheat" }}>
        NOVELS
      </div>
      <div className="flex items-center justify-center">
        <div className="flex h-[60vh] w-[65vw] flex-col rounded-2xl bg-stone-900">
          <p className="brownbulgary mt-5 text-center text-4xl text-white">
            STORY OF INDIA
          </p>
          <div className="brownbulgary mt-8 text-center text-3xl text-white">
            <p>PRICE</p>
            <p>AUTHOR</p>
          </div>
          {/* <button className="buyButton">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
}
