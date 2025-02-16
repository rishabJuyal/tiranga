import { NavLink } from "react-router-dom";
import { footer } from "../../../data";

const Footer = () => {
  return (
    <div className="fixed z-50 bottom-0 bg-[#0a1846] w-full max-w-[400px] flex justify-evenly items-center pt-5 pb-2">
      {footer.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.url}
          className={({ isActive }) =>
            `${isActive ? "text-sky-500" : "text-gray-300"} flex flex-col justify-center items-center gap-1`}
        >
          <div className="-ml-1">{tab.icon}</div>
          <div className="text-sm">{tab.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Footer;
