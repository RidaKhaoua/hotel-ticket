import Card from "@components/cards/Card";
import Cards from "@components/cards/Cards";
import Image from "@components/ui/Image";
import { experienceData } from "@constants/index";
import { IoIosArrowForward } from "react-icons/io";
import {v4 as uuid} from "uuid"

import clsx from "clsx";

function Experience() {
  return (
    <section className="py-10">
      <div className="flex justify-center items-center flex-col mb-16 max-lg:px-4">
        <h3 className="text-center mb-3 text-xl font-bold text-[#2A2F49]">
          The Disneyland Paris experience
        </h3>
        <p className="text-center lg:w-[80ch] text-[#2A2F49] ">
          Escape to the heart of the Disney, Pixar, MARVEL and Star Wars
          universes that you love so much. Disneyland Paris is full of
          activities for all ages and all tastes!
        </p>
      </div>
      <div className="relative">
        <div
          className="flex items-center justify-center absolute top-1/2 -translate-x-1/2 right-16  bg-violet-500
          text-white z-[999999] w-10 h-10 
          rounded-full max-lg:hidden cursor-pointer scale-95 hover:scale-100 duration-300">
          <IoIosArrowForward />
        </div>
        
        <Cards
          className="flex items-center justify-between max-lg:flex-wrap 
          gap-6 overflow-hidden py-4 w-[90%]"
          data={experienceData}
          renderItems={(item, index) => (
            <Card
              key={uuid()}
              {...item}
              btnText={item.btnLabel}
              className={clsx(
                "bg-white px-0 rounded-md pb-3 w-[320px] shrink-0 mx-auto",
                index < 3 ? "opacity-100" : "lg:opacity-70"
              )}>
              <Image
                src={item.img}
                alt={item.title}
                className="border-b-raduis h-48 rounded-md"
              />
            </Card>
          )}
        />
      </div>
    </section>
  );
}

export default Experience;
