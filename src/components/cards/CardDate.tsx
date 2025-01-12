

type TCardDate = {
  date: string;
};

function CardDate({ date }: TCardDate) {
  return (
    <div className="absolute -top-3 left-0 w-fit py-1 px-2 
    bg-gradient-to-r from-[#AF51A1] to-[#AF51A1] text-white rounded-md text-sm">
      {date}
    </div>
  );
}

export default CardDate;
