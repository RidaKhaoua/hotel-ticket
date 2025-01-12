import Card from "@components/cards/Card";
import Cards from "@components/cards/Cards";
import Image from "@components/ui/Image";
import { servicesData } from "@constants/index";
function Services() {
  return (
    <div className="max-md:pt-[35rem] max-lg:pt-[25rem] pt-40 pb-12 max-lg:px-1">
      <h2 className="text-center text-2xl mb-8 font-bold text-[#323A5B]">
        Let The Magic Shine at Disneyland Paris
      </h2>
      <Cards
        className="grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 items-center"
        data={servicesData}
        renderItems={(item) => (
          <Card {...item} btnText={item.btnLabel}>
            <Image src={item.img} className="rounded-md" alt={item.title} />
          </Card>
        )}
      />
    </div>
  );
}

export default Services;
