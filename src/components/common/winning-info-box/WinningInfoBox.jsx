import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { winningInfo } from "../../../data";

const WinningInfoBox = () => {
  const [winningInformation, setWinningInformation] = useState(winningInfo);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinningInformation((prev) => {
        if (prev.length > 1) {
          const lastItem = prev[prev.length - 1];
          return [lastItem, ...prev.slice(0, prev.length - 1)];
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 w-full">
      <div className="text-white text-xl font-semibold flex gap-1 mb-3">
        <div className="w-1 min-h-5 rounded-full bg-blue-500"></div> Winning
        Information
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        {winningInformation.map((winner) => (
          <Stack
            key={winner.id}
            direction="row"
            spacing={2}
            className="w-full bg-[#2b3270] shadow-lg text-white text-sm flex rounded-md p-3"
          >
            <Box className="flex gap-2 items-center w-32">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src={winner.winnerImage}
                  alt="Winner Image"
                  className="h-full w-full object-cover"
                />
              </div>
              Men***{winner.name.slice(winner.name.length - 3)}
            </Box>
            <Box className="flex gap-2 items-center">
              <div className="h-12 w-20 rounded-xl overflow-hidden bg-blue-400">
                <img
                  src={winner.gameImage}
                  alt="Winner Image"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="font-semibold">Received {winner.received}</div>
                <div className="text-gray-400">Winning amount</div>
              </div>
            </Box>
          </Stack>
        ))}
        {/*<Collapse key={item}>{renderItem({ item })}</Collapse> */}
      </div>
    </div>
  );
};

export default WinningInfoBox;
