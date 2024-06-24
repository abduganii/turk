import React from "react";
import Contianer from "../container";

export default function Footer() {
  return (
    <Contianer className="flex items-end justify-between mb-[185px]">
      <div className="w-full max-w-[421px]">
        <p class="text-white opacity-60 text-sm font-medium uppercase leading-snug">
          жилой комплекс “ISTANBUL CITY”
        </p>
        <div className="flex gap-[38px] mt-[26px] mb-[31px]">
          <div>
            <p class="text-white opacity-60 text-[13px] font-medium ">Email</p>
            <a
              href="mailto:istanbulcity@info.com"
              class="text-right text-sky-500 text-[13px] font-medium underline"
            >
              istanbulcity@info.com
            </a>
          </div>
          <div>
            <p class="text-white opacity-60 text-[13px] font-medium mb-[3px]">
              Address
            </p>
            <div class="opacity-40 text-white text-[13px] font-medium">
              Labzak Street, Tashkent, 84/4, 100028
            </div>
          </div>
        </div>
        <div class="text-white opacity-60 text-sm font-medium leading-snug">
          Copyright @ 2024 Istanbul City. All rights reserved.
        </div>
      </div>
      <div>
        <a
          href="tel:+998900000000"
          class="text-white opacity-60 text-sm font-medium  leading-snug"
        >
          +998 90 000-00-00
        </a>
        <div className="flex items-center mt-[20px]">
          <p class="text-right text-white opacity-60 text-sm font-medium ">
            designed by:
          </p>
          <a
            href="https://getter.uz"
            target="_blank"
            class="text-right text-white opacity-60 text-lg font-extrabold "
          >
            Getter
          </a>
        </div>
      </div>
    </Contianer>
  );
}
