import { BtnIcons } from "@/components/icons";
import Contianer from "@/components/ui/container";
import InputGlobal from "@/components/ui/input";
import React from "react";

export default function ContactsSection() {
  return (
    <Contianer className={"pb-[91px] "}>
      <h3 class="max-w-[643px] w-full text-white text-[80px] font-normal leading-[87px] tracking-[4px]  pt-[196px]">
        Получить консультацию
      </h3>
      <div className="flex items-center gap-[78px]">
        <div className="flex gap-5 w-full max-w-[1002px]">
          <InputGlobal
            style={{ width: "50%" }}
            type={"text"}
            placeholder={"Ваше имя"}
          />
          <InputGlobal
            mask="+\9\9\8-99-999-99-99"
            style={{ width: "50%" }}
            type={"tel"}
            placeholder={"номер телефона"}
          />
        </div>

        <div className="cursor-pointer">
          <BtnIcons />
        </div>
      </div>
    </Contianer>
  );
}
