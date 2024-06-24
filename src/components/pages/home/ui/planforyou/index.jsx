import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

export default function PlanForYou() {
  return (
    <Contianer className={"pt-[316px] pb-[206px]"} id="planForYou">
      <h3 class="max-w-[643px] w-full text-white text-[80px] font-normal leading-[87px] tracking-[4px] mb-[75px]">
        Планировки для вас{" "}
      </h3>
      <div className="flex items-start gap-[142px] mt-[-278px]">
        <div className="max-w-[546px] mt-[278px] aspect-[0.7/1] h-[732px] w-full relative">
          <Image
            className="aspect-[0.7/1] w-full z-10 absolute"
            src={"/Rectangle4.png"}
            width={546}
            height={732}
          />
          <Image
            className="absolute top-[-216px] right-[-46px] z-1"
            src={"/f1.png"}
            width={152}
            height={413}
          />
          <Image
            className="absolute top-[54px] right-[-92px]  z-1"
            src={"/f2.png"}
            width={143}
            height={415}
          />
          <Image
            className="absolute top-[206px] right-[-246px]  z-30"
            src={"/k1.png"}
            width={369}
            height={254}
          />
          <Image
            className="absolute bottom-[97px] right-[-146px]  z-30"
            src={"/k2.png"}
            width={230}
            height={158}
          />
        </div>
        <div className=" max-w-[546px] aspect-[0.7/1] h-[732px] w-full relative">
          <Image
            className="aspect-[0.7/1] w-full z-10 absolute"
            src={"/Rectangle5.png"}
            width={546}
            height={732}
          />
          <Image
            className="absolute top-[-160px] left-[-90px] z-1"
            src={"/f3.png"}
            width={132}
            height={162}
          />
          <Image
            className="absolute top-[-126px] right-[-66px] z-1"
            src={"/f1.png"}
            width={143}
            height={413}
          />
          <Image
            className="absolute bottom-[11px] right-[-92px] rotate-6 z-1"
            src={"/f2.png"}
            width={143}
            height={415}
          />
        </div>
      </div>
    </Contianer>
  );
}
