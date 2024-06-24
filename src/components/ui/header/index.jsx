import {
  FaceBookIcons,
  TelegramIcons,
  TwitterIcons,
  YoutobeIcons
} from "@/components/icons";
import Image from "next/image";
import React from "react";
import Contianer from "../container";
import Link from "next/link";

const navbar = [
  {
    id: 1,
    label: "Проекты",
    link: "#project"
  },
  {
    id: 2,
    label: "Концепция",
    link: "#Complex"
  },
  {
    id: 3,
    label: "Планировки",
    link: "#plan"
  },
  {
    id: 4,
    label: "Локация",
    link: "#About"
  }
];
const navbar1 = [
  {
    id: 1,
    label: "О нас",
    link: "#About"
  },
  {
    id: 2,
    label: "Галерея",
    link: "#Phone"
  },
  {
    id: 3,
    label: "Контакты",
    link: "#About"
  },
  {
    id: 4,
    label: "+90 000-00-00",
    link: "#"
  }
];

export default function Header() {
  return (
    <header className="bg-transparent fixed w-full z-40">
      <Contianer className={"flex justify-between pt-[11px] top-0"}>
        <div>
          <p class="pb-[23px] text-white text-lg font-medium ">г.Ташкент</p>
          <div
            class=" rounded-[3px] backdrop-blur-[74px] flex gap-[20px] py-[10px] px-[15px]"
            style={{ background: "#163B37" }}
          >
            {navbar?.map((e) => (
              <Link
                href={e?.link}
                key={e?.id}
                class="text-white text-lg font-medium "
              >
                {e?.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          class="px-[30px] py-[10px] pb-[18px] "
          style={{ background: "#163B37" }}
        >
          <Image src={"/logo.svg"} width={120} height={105} />
        </div>
        <div>
          <div className="flex justify-end gap-[4px]  pb-[23px]">
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <TwitterIcons />
            </div>
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <YoutobeIcons />
            </div>
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <FaceBookIcons />
            </div>
            <div
              class="p-[6px] bg-neutral-900/opacity-10 rounded-[7px] backdrop-blur-[54px]"
              style={{ background: "#12121221" }}
            >
              <TelegramIcons />
            </div>
          </div>
          <div
            class=" rounded-[3px] backdrop-blur-[74px] flex gap-[20px] py-[10px] px-[15px]"
            style={{ background: "#163B37" }}
          >
            {navbar1?.map((e) => (
              <Link
                href={e?.link}
                key={e?.id}
                class="text-white text-lg font-medium "
              >
                {e?.label}
              </Link>
            ))}
          </div>
        </div>
      </Contianer>
    </header>
  );
}
