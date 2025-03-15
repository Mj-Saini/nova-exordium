/* eslint-disable no-var */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { testimonials } from "./common/Helper";
import { Inter } from "next/font/google";
import { SliderArrowsIcon, StartIcon } from "./common/Icons";
import Slider from "react-slick";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const Testimonial: React.FC = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
      slidesToScroll: 1,
    responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="py-12 lg:mt-[170px]">
      <div className="custom_container">
        <div className=" text-center">
          <h2
            className={`text-2xl md:text-3xl lg:text-[34px] text-[#333333] font-bold ${inter.className}`}
          >
            Client Testimonials
          </h2>
          <p className="font-normal text-base text-[#333] py-4 ">
            What Our Clients Say
          </p>
        </div>

        <div className="relative mt-8 lg:mt-[60px]">
          <div className="xl:block hidden">
            <span className="absolute -left-10 top-1/2 -translate-y-1/2">
              <SliderArrowsIcon />
            </span>
            <span className="absolute -right-10 top-1/2 -translate-y-1/2 -scale-105">
              <SliderArrowsIcon />
            </span>
          </div>
          <Slider {...settings}>
            {/* Testimonials Grid */}
            {/* <div className="mt-8 grid gap-6 md:grid-cols-3 px-6 lg:px-0"> */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
                  {/* Stars */}
                  <div className="flex justify-center mb-6 text-yellow-500">
                    <span>
                      <StartIcon />
                    </span>
                    <span>
                      <StartIcon />
                    </span>
                    <span>
                      <StartIcon />
                    </span>
                    <span>
                      <StartIcon />
                    </span>
                    <span>
                      <StartIcon />
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="font-medium text-sm  text-[#333] leading-6 text-start">
                    "{testimonial.review}"
                  </p>

                  {/* Profile Info */}
                  <div className="mt-6 flex items-center justify-start space-x-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
