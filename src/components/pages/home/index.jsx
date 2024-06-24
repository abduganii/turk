import Image from "next/image";
import React from "react";
import Complex from "./ui/complex";
import ContactsSection from "./ui/contact";
import LifeCompalex from "./ui/lifeincomplex";
import PhoneSection from "./ui/photo";
import Plan from "./ui/plan";
import PlanForYou from "./ui/planforyou";
import HomeSity from "./ui/sity";
import AboutUs from "./ui/about-us";

export default function HomePage() {
  return (
    <div>
      <Image
        src={"/Group1.png"}
        className="w-full "
        width={2900}
        height={800}
      />
      <HomeSity />
      <Complex />
      <Plan />
      <PlanForYou />
      <LifeCompalex />
      <PhoneSection />
      <div className="bg-[url('/Group48098604.png')]" id="About">
        <ContactsSection />
        <AboutUs />
      </div>
    </div>
  );
}
