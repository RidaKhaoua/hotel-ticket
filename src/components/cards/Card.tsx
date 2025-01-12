import Button from "@components/ui/Button";
import clsx from "clsx";
import React from "react";
import CardDate from "./CardDate";

type TCard = {
  id?: number;
  title: string;
  description: string;
  btnText: string;
  className?: string;
  children: React.ReactNode;
  date?: string;
};

function Card({
  title,
  description,
  children,
  btnText,
  className,
  date,
}: TCard) {
  return (
    <div
      className={clsx(
        "relative flex flex-col justify-between min-h-[580px] mb-4  max-md:mb-14",
        className
      )}>
      {date && <CardDate date={date} />}
      <div>
        {children}
        <div className="px-7">
          <h4 className="text-[#323A5B] font-bold max-w-[18ch] text-xl mb-2 ">
            {title}
          </h4>
          <p className="text-[#707381]  max-lg:mb-7">{description}</p>
        </div>
      </div>
      <Button className="border-2 self-end  border-[#3E67BB] text-[#356DCF] w-3/4 outline-none
       block mr-auto ml-auto rounded-full py-1 font-bold hover:bg-[#3F65B6] hover:text-white duration-300">
        {btnText}
      </Button>
    </div>
  );
}

export default Card;
