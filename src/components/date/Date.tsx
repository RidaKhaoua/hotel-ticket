import clsx from "clsx";
import { MdDateRange } from "react-icons/md";
type TDate = {
  name: string;
  className: string;
};

function Date({ name, className }: TDate) {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 border border-[#BDBEC1] w-52 p-2 rounded-md",
        className
      )}>
      <MdDateRange size={30}  />
      <p className="text-[#6A7275] font-medium">{name}</p>
    </div>
  );
}

export default Date;
