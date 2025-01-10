import Card from "@components/cards/Card";
import { servicesData } from "@constants/index";
function Cards() {
  const renderData = servicesData.map((service) => {
    return (
      <Card
        key={service.id}
        img={service.img}
        title={service.title}
        description={service.description}
        btnText={service.btnLabel}
      />
    );
  });

  return (
    <div className="grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 items-center w-[80%] mr-auto ml-auto">
      {renderData}
    </div>
  );
}

export default Cards;
