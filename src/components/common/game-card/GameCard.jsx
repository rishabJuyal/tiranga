import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GameCard = ({ game, title, gameCategoryUrl }) => {
  return (
    <div
      className={`h-fit ${
        title === "Virtual Games" && game.id === 1.3
          ? "rounded-3xl"
          : game.id === 1.5
          ? "rounded-4xl"
          : "rounded-xl"
      } overflow-hidden `}
    >
      {game.gameUrl ? (
        <Link to={`${gameCategoryUrl}/${game.gameUrl}`}>
          <div className="bg-[#2aa2f3] rounded-xl h-40">
            <img src={game.img} alt="Game Image" className="h-full" />
          </div>
        </Link>
      ) : (
          <div className="bg-[#2aa2f3] rounded-xl h-40">
            <img src={game.img} alt="Game Image" className="h-full" />
          </div>
      )}

      {title === "Platform Recommendation" && (
        <div className="w-full h-6 bg-white mt-2 rounded-2xl text-white relative">
          <div
            className={`w-[96.5%] h-full bg-blue-400 rounded-2xl pl-2 pt-[2px] text-sm flex justify-between items-center`}
          >
            odd of
          </div>
          <span className="absolute right-1 top-[2px] text-sm font-semibold">
            {game.odd}%
          </span>
        </div>
      )}
    </div>
  );
};

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  gameCategoryUrl: PropTypes.string.isRequired,
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    odd: PropTypes.number,
    gameUrl: PropTypes.string,
  }).isRequired,
};

export default GameCard;
