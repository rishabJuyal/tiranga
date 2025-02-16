import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Game = ({ game, title }) => {
  return (
    <div className="h-fit">
      <Link to="/games">
        <div className="bg-[#2aa2f3] rounded-xl h-40">
          <img src={game.image} alt="Game Image" className="h-full" />
        </div>
      </Link>
      {title === "Platform Recommendation" && (
        <div className="w-full h-6 bg-white mt-2 rounded-2xl text-white relative">
          <div className={`w-[96.5%] h-full bg-blue-400 rounded-2xl pl-2 pt-[2px] text-sm flex justify-between items-center`}>
            odd of
          </div>
            <span className="absolute right-1 top-[2px] text-sm font-semibold">{game.odd}%</span>
        </div>
      )}
    </div>
  );
};

Game.propTypes = {
  title: PropTypes.string.isRequired,
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    odd: PropTypes.number,
  }).isRequired,
};

export default Game;
