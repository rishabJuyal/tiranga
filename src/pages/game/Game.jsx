import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Aviator, PushpaRani } from "../../components";

const Game = () => {
  const [gameName, setGameName] = useState("");

  const location = useLocation();

  useEffect(() => {
    const name = location.pathname.split("/")[3];
    setGameName(name.charAt(0).toUpperCase() + name.slice(1));
  }, [location.pathname]);

  switch (gameName) {
    case "Aviator":
      return <Aviator />;
    // case "Heads-and-tails":
    //   return <HeadAndTails />;
    // case "Wingo-lottery":
    //   return <WingoLottery />;
    // case "Dice":
    //   return <Dice />;
    // case "Mines-land":
    //   return <MinesLand />;
    // case "Ballon":
    //   return <Ballon />;
    case "Pushpa":
      return <PushpaRani />;
    default:
      return (
        <div className="text-3xl font-semibold underline text-white">
          {gameName} Game
        </div>
      );
  }
};

export default Game;
