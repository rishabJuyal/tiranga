import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Aviator } from "../../components";

const Game = () => {
  const [gameName, setGameName] = useState("");

  const location = useLocation();

  useEffect(() => {
    const name = location.pathname.split("/")[3];
    setGameName(name.charAt(0).toUpperCase() + name.slice(1));
    console.log(name)
    console.log(name === "aviator");
  }, [location.pathname]);

  useEffect(() => {
    console.log(gameName)
  }, [gameName])

  return gameName === "Aviator" ? (
    <Aviator />
  ) : (
    <div className="text-3xl font-semibold underline text-white">
      {gameName} Game
    </div>
  );
};

export default Game;
