import { ArrowForwardIos, LocalFireDepartment } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { GameCard, Lottery } from "../../index";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GameCategoryBox = ({ gameCategory }) => {
  return (
    <div className="my-8">
      <div className="mb-3 w-full flex justify-between items-center">
        <div className="text-white text-xl font-semibold flex gap-1">
          {gameCategory.title === "Platform Recommendation" ? (
            <LocalFireDepartment color="primary" />
          ) : (
            <div className="w-1 min-h-5 rounded-full bg-blue-500"></div>
          )}
          {gameCategory.title}
        </div>
        <Button
          variant="outlined"
          sx={{
            color: "#aaa",
            borderColor: "#aaa",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            fontSize: "12px",
          }}
          component={Link}
          to={gameCategory.gameCategoryUrl}
        >
          All{" "}
          <Typography
            color="primary"
            sx={{ fontSize: "12px", marginBottom: "2px" }}
          >
            {gameCategory.totalGames}
          </Typography>
          <ArrowForwardIos
            sx={{ color: "#636367", fontSize: "12px", marginBottom: "2px" }}
          />
        </Button>
      </div>
      <div
        className={`grid ${
          gameCategory.title === "Lottery" ? "grid-cols-2" : "grid-cols-3"
        } gap-3`}
      >
        {gameCategory.games.map((game) =>
          gameCategory.title === "Lottery" ? (
            <Lottery
              key={game.id}
              game={game}
              gameCategoryUrl={gameCategory.gameCategoryUrl}
            />
          ) : (
            <GameCard
              key={game.id}
              game={game}
              title={gameCategory.title}
              gameCategoryUrl={gameCategory.gameCategoryUrl}
            />
          )
        )}
      </div>
    </div>
  );
};

GameCategoryBox.propTypes = {
  gameCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    gameCategoryUrl: PropTypes.string.isRequired,
    totalGames: PropTypes.number.isRequired,
    games: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired
    ),
  }).isRequired,
};

export default GameCategoryBox;
