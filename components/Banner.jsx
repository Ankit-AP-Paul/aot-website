import React from "react";
import TextSlider from "@/components/TextSlider";

export default function Banner() {
  return (
    <div class="flex gap-5 ">
      <div class="flex-none w-20">
        <img src="assets/images/aot-logo.png" alt="logo" />
      </div>
      <div class="flex-initial mt-1.5">
        <TextSlider
          name="Academy of Technology"
          tagline="Transforming your vision into reality"
        />
      </div>
    </div>
  );
}
