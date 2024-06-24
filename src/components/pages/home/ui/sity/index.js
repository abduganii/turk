import Contianer from "@/components/ui/container";
import Image from "next/image";
import React from "react";

export default function HomeSity() {
  return (
    <div className="w-full bg-[url('/Click.png')]">
      {/* Click.png */}
      <Contianer className={"mt-[-100px]"}>
        <div className="flex justify-between gap-[10px] items-center pb-[40px]">
          <div className="w-full max-w-[690px]">
            <h2 class="text-white text-[140px] font-extrabold  ">ISTANBUL</h2>
            <h2 class="text-white text-end text-[140px] font-extrabold mt-[-90px] ">
              CITY
            </h2>
          </div>
          <div class="w-full max-w-[538px] bg-white/opacity-10 backdrop-blur-[144px]">
            <p class="w-full max-w-[479px] text-white text-[22px] font-bold  uppercase leading-[30px] p-[35px] pb-[70px]">
              Современное жилье в сердце города: жилой комплекс новостроек с
              удобствами и стилем для вашей идеальной жизни.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-start gap-[10px] ">
          <div class="w-full max-w-[650px] px-[65px] pt-[62px] pb-[103px] mt-[53px] bg-white">
            <h4 class="w-full max-w-[496px] text-neutral-800 text-[44px] font-semibold pb-[17px]">
              О жилой комплексе
            </h4>
            <p class="w-full max-w-[496px] text-neutral-800 text-lg font-normal  leading-[27px]">
              Расположенный в живописном пригороде, наш жилой комплекс
              предлагает современные апартаменты с изысканным дизайном и
              удобствами для комфортной жизни. Открытые пространства, бассейн,
              фитнес-центр и детские площадки создают идеальное окружение для
              семей и молодых профессионалов.{" "}
            </p>
          </div>
          <div className="w-full max-w-[600px] h-[700px] relative">
            <Image
              className="absolute left-0 top-0"
              src="/logoa.png"
              width={280}
              height={457}
            />
            <Image
              className="absolute left-[99px] top-[130px]  object-cover h-[515px]"
              src="/logoa.png"
              width={360}
              height={515}
            />
            <Image
              className="absolute right-[0] bottom-[120px] "
              src="/Rectangle1.png"
              width={446}
              height={405}
            />
          </div>
        </div>
      </Contianer>
    </div>
  );
}
