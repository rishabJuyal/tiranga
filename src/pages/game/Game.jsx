import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Game = () => {
  const [gameName, setGameName] = useState("");

  const location = useLocation();

  useEffect(() => {
    const name = location.pathname.split("/")[3];
    setGameName(name.charAt(0).toUpperCase() + name.slice(1));
  }, [location.pathname]);

  return (
    <div className="text-3xl font-semibold underline text-white">
      {gameName} Game
    </div>
  );
};

export default Game;
