import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const arr = ["/2.jpg", "/1.jpg", "/2.jpg", "/3.jpg", "/2.jpg", "/1.jpg"];
const arr1 = ["/4.jpg", "/5.jpg", "/6.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

export default function PhoneSection() {
  return (
    <>
      <Contianer>
        <h3 class="max-w-[643px]  w-full text-white text-[80px] font-normal leading-[87px] tracking-[4px] mt-[140px] mb-[82px]">
          Фотогорафии от сердце{" "}
        </h3>
      </Contianer>
      <Marquee >
        <div>
          <div className="flex h-[222px] gap-[8px] mb-[8px] ml-[8px]">
            {arr?.map((e, i) => (
              <Image
                src={e}
                className={`object-cover `}
                width={i % 2 == 0 ? 368 : 737}
                height={222}
                objectFit={"cover"}
              />
            ))}
          </div>
          <div className="flex h-[222px] gap-[8px] ">
            {arr1?.map((e, i) => (
              <Image
                className={`object-cover `}
                src={e}
                width={i % 2 == 0 ? 737 : 368}
                height={222}
                objectFit={"cover"}
              />
            ))}
          </div>
        </div>
      </Marquee>
    </>
  );
}
