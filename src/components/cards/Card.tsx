import Button from "@components/ui/Button";

type TCard = {
  id?: number;
  title: string;
  description: string;
  img: string;
  btnText: string;
};

function Card({ title, description, img, btnText }: TCard) {
  return (
    <div className=" flex flex-col justify-between px-3  lg:h-[500px] max-md:mb-14">
      <div>
        <img className="w-full  rounded-md mb-5" src={img} alt="" />
        <div className="px-3">
          <h4 className="text-[#323A5B] font-bold max-w-[18ch] text-xl mb-2 ">
            {title}
          </h4>
          <p className="text-[#707381]  max-lg:mb-7  ">{description}</p>
        </div>
      </div>
      <Button className="border-2 self-end  border-[#3E67BB] text-[#356DCF] w-3/4 block mr-auto ml-auto rounded-full py-1 font-bold">
        {btnText}
      </Button>
    </div>
  );
}

export default Card;
