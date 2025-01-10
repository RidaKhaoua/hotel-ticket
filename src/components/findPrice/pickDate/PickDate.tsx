import Date from "@components/date/Date";


function PickDate() {
  return (
    <div>
      <h4 className="font-semibold ml-1 mb-1">Pick your dates</h4>
      <div className="flex flex-wrap gap-3 max-lg:mb-5">
        <Date
          name="Arrival Date"
          className="max-lg:rounded-l-md  max-md:w-full "
        />
        <Date
          name="Deparature Date"
          className="max-lg:rounded-r-md max-md:w-full"
        />
      </div>
    </div>
  );
}

export default PickDate;
