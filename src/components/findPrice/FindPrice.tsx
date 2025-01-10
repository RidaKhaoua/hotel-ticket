import Tickets from "@components/tickets/Tickets";
import Button from "@components/ui/Button";
import PickDate from "./pickDate/PickDate";
import SelectChoice from "./selectChoice/SelectChoice";

function FindPrice() {
  return (
    <div className="max-md:w-10/12 w-[88%] bg-white absolute  left-1/2 top-11  rounded-md -translate-x-1/2 max-md:px-3">
      <Tickets />
      <div className="lg:flex justify-evenly  items-center flex-wrap mt-2 lg:mb-14 mb-2 max-lg:px-7">
        <PickDate />
        <SelectChoice />
        <div className="self-end max-lg:mt-5">
          <Button className="max-lg:w-3/4 block max-lg:m-auto  text-white bg-gradient-to-r from-[#0038D1] via-[#0145E2] to-[#0050EF] px-8 py-3 rounded-full">
            Find prices
          </Button>
        </div>
      </div>
      <div className=" flex  justify-center items-center text-center mb-3 flex-wrap">
        <p>Looking for the ideal moment to come?</p>
        <a href="#" className="underline text-[#5A86E5]">
          Compare price now!
        </a>
      </div>
    </div>
  );
}

export default FindPrice;
