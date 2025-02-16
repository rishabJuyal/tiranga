import { tabs } from "../../../data";

const TabBox = () => {
  return (
    <div className="my-4 w-full grid grid-cols-6 gap-4">
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          className={`${
            tab.classes ? tab.classes : ""
          } relative flex items-end h-20`}
        >
          <img src={tab.image} alt={tab.name} className="h-16 z-10" />
          <p className="mb-3 z-10 absolute bottom-0 right-0 text-white font-semibold">
            {tab.name}
          </p>
          <img
            src={tab.background}
            alt={tab.name}
            className={`absolute -top-0 -left-2 ${index < 2 ? "min-w-[110%]" : "min-w-[115%]" } h-[115%] object-cover`}
          />
        </div>
      ))}
    </div>
  );
};

export default TabBox;
