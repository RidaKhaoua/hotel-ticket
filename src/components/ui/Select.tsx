import React from "react";

interface TSelect<T> {
  data: T[];
  renderItems: (items: T) => React.ReactNode;
}

function Select<T>({ data, renderItems }: TSelect<T>) {
  const renderOption = data?.map((item) => {
    return <>{renderItems(item)}</>;
  });

  return (
    <select className="w-64 max-lg:w-full  max-md:mb-5 max-md:mt-1 border
     border-[#BDBEC1] rounded-md p-3 font-normal">
      {renderOption}
    </select>
  );
}

export default Select;
