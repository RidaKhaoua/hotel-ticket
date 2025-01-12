import clsx from "clsx";

interface TCards<T> {
  data: T[];
  renderItems: (item: T, index: number) => React.ReactNode;
  className: string;
}

function Cards<T>({ data, renderItems, className }: TCards<T>) {
  const renderData = data.map((item, index) => <>{renderItems(item, index)}</>);

  return (
    <div className={clsx("max-lg:w-[88%] w-[1200px] mx-auto ", className)}>
      {renderData}
    </div>
  );
}

export default Cards;
