import React from "react";
import TextSlider from "@/components/TextSlider";

export default function Banner() {
  return (
    <div className="flex gap-5 ml-20 mr-20">
      <div className="flex-none w-20">
        <img src="assets/images/aot-logo.png" alt="logo" />
      </div>
      <div className="flex-initial mt-1.5">
        <TextSlider
          name="Academy of Technology"
          tagline="Transforming your vision into reality"
        />
      </div>
      <div className="flex-none mt-1.5">Search</div>
    </div>
  );
}
