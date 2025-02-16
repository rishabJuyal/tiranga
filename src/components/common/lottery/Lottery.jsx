import PropTypes from "prop-types";
import { lotteryBackground } from "../../../images";
import { Button, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Lottery = ({ game }) => {
  return (
    <div className="relative">
      <Link to="/games">
      <img src={lotteryBackground} alt="Lottery Background" />
      <Typography
        sx={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: game.id === 1.4 ? "16px" : "20px",
          color: "white",
        }}
      >
        {game.text}
      </Typography>
      <img
        src={game.image}
        alt="Game Image"
        className="absolute z-10 top-6 left-5 h-36"
      />
      <Button
        sx={{
          color: "white",
          position: "absolute",
          zIndex: "10",
          bottom: "10px",
          right: "10px",
          border: "1px solid white",
          borderRadius: "50px",
          paddingInline: "25px",
          paddingBlock: "2px",
          fontWeight: "600"
        }}
      >
        Go{" "}
        <ArrowForwardIos
          sx={{ fontSize: "12px", marginBottom: "3px", marginLeft: "3px" }}
        />
      </Button>
      </Link>
    </div>
  );
};

Lottery.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Lottery;
