import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import React from "react";
import Organisation from "./Organisation";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
});

function Page() {
  const t = useTranslations(["School.Presentation"]);

  return (
    <div>
      <section className="relative min-h-heroSectionMobile lg:h-heroSection   bg-cover bg-center flex items-end pb-8 lg:pb-20">
        <Image
          src="/school/presentation/hero.png"
          className="top-0 left-0 object-cover"
          fill
          alt=""
        />
        <div className="bg-gradient-to-b from-heroGradientStart/75 to-heroGradientEnd/60 absolute top-0 left-0 w-full h-full" />
        <div className="relative pt-16 text-white container flex gap-14 items-center">
          <h1
            className={cn(
              sourceSerif.className,
              "font-bold hidden lg:block lg:text-5xl max-w-2xl mb-2 lg:mb-5"
            )}
          >
            {t("hero.title")}
          </h1>
          <div className="relative text-white flex-1  lg:max-w-3xl lg:bg-[rgba(39,62,90,0.6)] lg:py-14 lg:px-7 lg:border lg:border-[rgb(195,193,251,0.5)] lg:backdrop-blur-[10px] lg:ml-auto">
            <h3 className="text-xl mb-2 font-semibold">
              {t("hero.info.title")}
            </h3>
            <p className="mb-4">{t("hero.info.description")}</p>
            <Button>{t("hero.info.actionBtn")}</Button>
          </div>
        </div>
      </section>
      <section className="bg-darkblue text-white py-20 relative">
        <Image
          src="/gradient-blue.svg"
          className="absolute right-0 top-0 rotate-180"
          width={301}
          height={326}
          alt=""
        />
        <div className="container">
          <Image
            src="/gray-dots.svg"
            className="absolute  left-10 -top-10 rotate-90 "
            width={100}
            height={100}
            alt=""
          />
          <Image
            src="/gray-dots.svg"
            className="absolute bottom-0 right-0"
            width={100}
            height={100}
            alt=""
          />
          <h2
            className={cn(
              "font-bold text-2xl mb-8 lg:text-3xl lg:text-center lg:mb-6",
              sourceSerif.className
            )}
          >
            {t("vision.title")}
          </h2>
          <p className="text-left lg:text-center">{t("vision.description")}</p>
        </div>
      </section>
      <section>
        <div className="container py-14">
          <h2
            className={cn(
              "font-bold text-2xl mb-8 lg:text-3xl lg:text-center lg:mb-6",
              sourceSerif.className
            )}
          >
            {t("creation.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-14 text-center flex-wrap mt-10">
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center justify-center p-4 border border-black rounded-full">
                <Image
                  src="/school/presentation/esi-logo.svg"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <div className="text-honolulu text-lg font-bold mt-4">
                {t("creation.steps.0.name")}
              </div>
              <div>{t("creation.steps.0.description")}</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center justify-center p-4 border border-black rounded-full">
                <Image
                  src="/school/presentation/esi-logo.svg"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <div className="text-honolulu text-lg font-bold mt-4">
                {t("creation.steps.1.name")}
              </div>
              <div>{t("creation.steps.1.description")}</div>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="flex items-center justify-center p-4 border border-black rounded-full">
                <Image
                  src="/school/presentation/esi-logo.svg"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <div className="text-honolulu text-lg font-bold mt-4">
                {t("creation.steps.2.name")}
              </div>
              <div>{t("creation.steps.2.description")}</div>
            </div>
          </div>
        </div>
      </section>
      <Organisation />
      <section>
        <div className="container py-14">
          <h2
            className={cn(
              "font-bold text-2xl mb-8 lg:text-3xl lg:text-center lg:mb-6",
              sourceSerif.className
            )}
          >
            {t("creation.title")}
          </h2>
          <div className="text-center flex-wrap mt-10">
            {t("organisation.second")}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
