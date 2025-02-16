import { useDispatch } from "react-redux";
import { userDataActions } from "../../../store/userData";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(userDataActions.updateUser(true));
    navigate('/')
  };
  return (
    <div className="h-screen w-full flex justify-center items-center text-white">
      <div className="w-fit h-fit rounded-lg shadow-lg border-white border p-10 flex flex-col justify-center items-center gap-10">
        <h1 className="text-4xl font-semibold text-white">Login</h1>
        <Button variant="contained" onClick={handleLogin}>Login</Button>
        <Button component={Link} to="/">Go to Home Page</Button>
      </div>
    </div>
  );
};

export default Login;
