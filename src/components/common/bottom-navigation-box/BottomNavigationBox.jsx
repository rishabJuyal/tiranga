import { ArrowForwardIos } from "@mui/icons-material";
import { bottomNavigation } from "../../../data";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";

const BottomNavigationBox = () => {
  return (
    <div className="bg-[#2b3270] w-full flex justify-center items-start flex-col rounded-xl p-3">
      {bottomNavigation.map((navigation) => (
        <NavLink key={navigation.id} to={navigation.url} className="w-full">
          <div className="w-full flex justify-between items-center my-3 text-white">
            <div className="flex gap-3">
              {navigation.icon}
              {navigation.title}
            </div>
            <ArrowForwardIos fontSize="small" sx={{ color: "#636367" }} />
          </div>
          {navigation.showDivider && (
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ backgroundColor: "#374992" }}
            />
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigationBox;
