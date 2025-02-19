import PropTypes from "prop-types";
import { tabs } from "../../../data";

const TabBox = ({ changeTab }) => {
  return (
    /* <div className="my-4 w-full grid grid-cols-6 gap-4"> */
    <div className="my-4 w-full grid grid-cols-6 gap-4">
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          className={`${
            tab.classes ? tab.classes : ""
          } relative flex items-end h-24 cursor-pointer rounded-xl overflow-hidden border`}
          onClick={() => changeTab(tab.name)}
        >
          <img src={tab.image} alt={tab.name} className="h-16 mb-3 ml-1 z-10" />
          <p className="mb-3 z-10 absolute bottom-3 right-3 text-white font-semibold">
            {tab.name}
          </p>
          <img
            src={tab.background}
            alt={tab.name}
            className={`absolute  -top-2 min-h-[125%]  ${
              index < 2
                ? "min-w-[100%] left-0"
                : "min-w-[115%]  -left-3"
            } object-cover rounded-xl`}
          />
        </div>
      ))}
    </div>
  );
};

TabBox.propTypes = {
  changeTab: PropTypes.func.isRequired,
};

export default TabBox;
