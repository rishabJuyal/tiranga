import { Box, Button } from "@mui/material";
import { logo } from "../../../images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const {isAuthenticated} = useSelector((store) => store.userData)
  return (
    <Box className="bg-[#2b3270] flex items-center justify-between gap-3 p-3 sticky top-0 z-20">
      <div>
        <img src={logo} className="h-9" alt="Tiranga" />
      </div>
      {!isAuthenticated && (
        <div className="flex items-center justify-center gap-2">
          <Button variant="outlined" component={Link} to="/login">
            Log in
          </Button>
          <Button variant="contained" component={Link} to="/register">
            Register
          </Button>
        </div>
      )}
    </Box>
  );
};

export default Header;
