"use client";
import React,{useRef} from 'react'
import Carousel from "@/components/Carousel";
import { Source_Serif_4 } from "next/font/google"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
  });


export const Club = ({name,description,image}) => {
    return(
        <div className="h-80 max-w-[20rem] bg-transparent border-[1px] border-gray-500 p-6">
            <Image src={image} alt="/" width={100} height={100} className=''/>
            <h1 className="font-semibold text-2xl py-4">{name}</h1>
            <p className="text-sm">{description}</p>
        </div>
    )}

const OurClubs = () => {
    const t = useTranslations(["clubs.main"]);
    let sliderRef = useRef(null);

    const next = () => {
      sliderRef.slickNext();
    };
    const previous = () => {
      sliderRef.slickPrev();
    };

  return (
    <section className="bg-darkblue py-10">
      <div className="container text-center text-white pb-20">
        <p className="font-semibold text-base pb-6">{t("ourClubs.title")}</p>
        <p className={`font-bold text-xl lg:text-3xl ${sourceSerif.className}`}>
          {t("ourClubs.discover")}
        </p>
      </div>
      <div className="relative text-white">
        <Carousel
          refAssignment={(ref) => {
            sliderRef = ref;
          }}
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            initialSlide: 0,
            centerMode: true,
            centerPadding: "50px",
            customPaging: () => (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "1px white solid",
                }}
              ></div>
            ),
          }}
          responsive={[
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          <Club
            name={"GDG"}
            description="Club Google Developer Groups Date de créationSeptembre 2011 Domaine Développement des produits technologiques"
            image={"/gdg-Photoroom.png"}
          />
          <Club
            name={"CSE"}
            description="Club scientifique de l'ESI Domaine Scientifique / Technologique Evénements majeursHack IT / Leapfrog / Design Fest / Algeria Web Awards"
            image={"/cse-logo-png.png"}
          />
          <Club
            name={"ETIC"}
            description="Domaine : Entrepreneuriat Nombre d'événements : 59 Evénements majeurs : Salon de l’emploi / Training Camp / Before S2EE"
            image={"/etic.png"}
          />
        </Carousel>
        <button
          onClick={previous}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white focus:outline-none"
        >
          <ChevronLeftIcon className="w-7 h-7 " />
        </button>
        <button
          onClick={next}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#203960] border border-[#f8f8f8] p-1 rounded-full text-white focus:outline-none"
        >
          <ChevronRightIcon className="w-7 h-7 " />
        </button>
      </div>
    </section>
  );
}

export default OurClubs