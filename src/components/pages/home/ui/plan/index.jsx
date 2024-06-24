import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

export default function Plan() {
  return (
    <div className="w-full" id="plan">
      <Contianer className="w-full pb-[38px] md:pb-[68px] //bg-[url('/Group48098590.svg')]1  bg-right-bottom bg-no-repeat">
        <h3 class="w-full max-w-[650px] text-white text-[28px] md:text-5xl font-medium  uppercase leading-[58px] tracking-widest">
          Планировки для вашего удобство
        </h3>
      </Contianer>
      <div className="flex w-full bg-white bg-[url('/Rectangle1.jpg')] bg-right-top bg-no-repeat">
        <Contianer className={"pt-[67px] pb-[72px]"}>
          <div className="w-full max-w-[375px] ml-[48px]">
            <Image
              src={"/Rectangle.jpg"}
              width={375}
              height={337}
              className="mb-[61px]"
            />
            <div className="w-full flex flex-wrap ">
              <div className="w-1/2 text-center mb-[25px]">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
              <div className="w-1/2 text-center mb-[25px]">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
              <div className="w-1/2 text-center">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
              <div className="w-1/2 text-center">
                <p class="text-center text-neutral-800 text-[22px] font-normal ">
                  89 кв/м
                </p>
                <p class="opacity-60 text-center text-neutral-800 text-[15px] font-normal mt-[8px]">
                  Общая площадь{" "}
                </p>
              </div>
            </div>
          </div>
        
        </Contianer>
      </div>
    </div>
  );
}
