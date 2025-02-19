import { ArrowForwardIos, LocalFireDepartment } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { GameCard, Lottery } from "../../index";
import { jiliGames } from "../../../data";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const GameCategoryBox = ({ gameCategory, currentTab, changeTab }) => {
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
        {currentTab === "Popular" && (
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
            // component={Link}
            // to={gameCategory.gameCategoryUrl}
            onClick={() => changeTab(gameCategory.title)}
          >
            All{" "}
            <Typography
              color="primary"
              sx={{ fontSize: "12px", marginBottom: "2px" }}
            >
              {gameCategory.totalGames
                ? gameCategory.totalGames
                : jiliGames.length}
            </Typography>
            <ArrowForwardIos
              sx={{ color: "#636367", fontSize: "12px", marginBottom: "2px" }}
            />
          </Button>
        )}
      </div>
      <div
        className={`grid ${
          gameCategory.title === "Lottery" ? "grid-cols-2" : "grid-cols-3"
        } gap-3`}
      >
        {currentTab === "Jili"
          ? jiliGames.map((game) => (
              <GameCard key={game.id} game={game} title={gameCategory.title} />
            ))
          : gameCategory.games.map((game) =>
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
        {/* {gameCategory.games.map((game) =>
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
        )} */}
      </div>
    </div>
  );
};

GameCategoryBox.propTypes = {
  currentTab: PropTypes.string.isRequired,
  changeTab: PropTypes.func.isRequired,
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
  children: PropTypes.arrayOf,
};

export default GameCategoryBox;
