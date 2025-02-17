import {
  lotteryFour,
  lotteryOne,
  lotteryThree,
  lotteryTwo,
  originalOne,
  originalTwo,
  originalThree,
  originalFour,
  originalFive,
  originalSix,
  recommendationOne,
  recommendationTwo,
  recommendationThree,
  recommendationFour,
  recommendationFive,
  recommendationSix,
  slotsOne,
  slotsTwo,
  slotsThree,
  slotsFour,
  slotsFive,
  slotsSix,
  sportsOne,
  sportsTwo,
  casinoOne,
  casinoTwo,
  casinoThree,
  casinoFour,
  casinoFive,
  casinoSix,
  fishingOne,
  fishingTwo,
  fishingThree,
  fishingFour,
  fishingFive,
  fishingSix,
  rummyOne,
  virtualOne,
  virtualTwo,
  virtualThree,
  virtualFour,
  virtualFive,
  virtualSix,
  virtualSeven,
} from "../images";

// const gameCategories = [
//   {
//     id: 1,
//     title: "Lottery",
//     totalGames: 4,
//     gameCategoryUrl: "/games/lottery",
//     games: [
//       {
//         id: 1.1,
//         text: "Win Go",
//         image: lotteryOne,
//         gameUrl: "win-go",
//       },
//       {
//         id: 1.2,
//         text: "K3",
//         image: lotteryTwo,
//         gameUrl: "k3",
//       },
//       {
//         id: 1.3,
//         text: "5D",
//         image: lotteryThree,
//         gameUrl: "5d",
//       },
//       {
//         id: 1.4,
//         text: "Try Win Go",
//         image: lotteryFour,
//         gameUrl: "try-win-go",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Original",
//     totalGames: 35,
//     gameCategoryUrl: "/games/original",
//     games: [
//       {
//         id: 2.1,
//         image: originalOne,
//         gameUrl: "aviator",
//       },
//       {
//         id: 2.2,
//         image: originalTwo,
//         gameUrl: "plinko",
//       },
//       {
//         id: 2.3,
//         image: originalThree,
//         gameUrl: "limbo",
//       },
//       {
//         id: 2.4,
//         image: originalFour,
//         gameUrl: "aviator",
//       },
//       {
//         id: 2.5,
//         image: originalFive,
//         gameUrl: "plinko",
//       },
//       {
//         id: 2.6,
//         image: originalSix,
//         gameUrl: "mines",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Platform Recommendation",
//     totalGames: 6,
//     gameCategoryUrl: "/games/platform-recommendation",
//     games: [
//       {
//         id: 3.1,
//         image: recommendationOne,
//         odd: 97.28,
//         gameUrl: "aviator",
//       },
//       {
//         id: 3.2,
//         image: recommendationTwo,
//         odd: 96.44,
//         gameUrl: "aviator",
//       },
//       {
//         id: 3.3,
//         image: recommendationThree,
//         odd: 97.55,
//         gameUrl: "fortune-ox",
//       },
//       {
//         id: 3.4,
//         image: recommendationFour,
//         odd: 96.34,
//         gameUrl: "royal-fishing",
//       },
//       {
//         id: 3.5,
//         image: recommendationFive,
//         odd: 96.16,
//         gameUrl: "super-rich",
//       },
//       {
//         id: 3.6,
//         image: recommendationSix,
//         odd: 96.16,
//         gameUrl: "fortune-rabbit",
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Slots",
//     totalGames: 8,
//     gameCategoryUrl: "/games/slots",
//     games: [
//       {
//         id: 4.1,
//         image: slotsOne,
//         gameUrl: "jili-game",
//       },
//       {
//         id: 4.2,
//         image: slotsTwo,
//         gameUrl: "pg-game",
//       },
//       {
//         id: 4.3,
//         image: slotsThree,
//         gameUrl: "ag-game",
//       },
//       {
//         id: 4.4,
//         image: slotsFour,
//         gameUrl: "m-game",
//       },
//       {
//         id: 4.5,
//         image: slotsFive,
//         gameUrl: "cqo-game",
//       },
//       {
//         id: 4.6,
//         image: slotsSix,
//         gameUrl: "evolution",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Sports",
//     totalGames: 2,
//     gameCategoryUrl: "/games/sports",
//     games: [
//       {
//         id: 5.1,
//         image: sportsOne,
//         gameUrl: "sports",
//       },
//       {
//         id: 5.2,
//         image: sportsTwo,
//         gameUrl: "sports",
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Casino",
//     totalGames: 6,
//     gameCategoryUrl: "/games/casino",
//     games: [
//       {
//         id: 6.1,
//         image: casinoOne,
//         gameUrl: "crazy-time",
//       },
//       {
//         id: 6.2,
//         image: casinoTwo,
//         gameUrl: "dragon-tiger",
//       },
//       {
//         id: 6.3,
//         image: casinoThree,
//         gameUrl: "american-routette",
//       },
//       {
//         id: 6.4,
//         image: casinoFour,
//         gameUrl: "andar-bahar",
//       },
//       {
//         id: 6.5,
//         image: casinoFive,
//         gameUrl: "auto-roulete",
//       },
//       {
//         id: 6.6,
//         image: casinoSix,
//         gameUrl: "super-sic-bo",
//       },
//     ],
//   },
//   {
//     id: 7,
//     title: "Fishing",
//     totalGames: 21,
//     gameCategoryUrl: "/games/fishing",
//     games: [
//       {
//         id: 7.1,
//         image: fishingOne,
//         gameUrl: "royal-fishing",
//       },
//       {
//         id: 7.2,
//         image: fishingTwo,
//         gameUrl: "all-star-fishing",
//       },
//       {
//         id: 7.3,
//         image: fishingThree,
//         gameUrl: "bombing-fishing",
//       },
//       {
//         id: 7.4,
//         image: fishingFour,
//         gameUrl: "dinosaur-tycoon",
//       },
//       {
//         id: 7.5,
//         image: fishingFive,
//         gameUrl: "jackpot-fishing",
//       },
//       {
//         id: 7.6,
//         image: fishingSix,
//         gameUrl: "dinosaur-tycoon",
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "Rummy",
//     gameCategoryUrl: "/games/rummy",
//     totalGames: 1,
//     games: [
//       {
//         id: 8.1,
//         image: rummyOne,
//         gameUrl: "rummy",
//       },
//     ],
//   },
// ];
const gameCategories = [
  {
    id: 1,
    title: "Virtual Games",
    totalGames: 7,
    gameCategoryUrl: "/games/virtual-games",
    games: [
      {
        id: 1.1,
        text: "Aviator",
        image: virtualOne,
        gameUrl: "aviator",
      },
      {
        id: 1.2,
        text: "Heads & Tails",
        image: virtualTwo,
        gameUrl: "heads-and-tails",
      },
      {
        id: 1.3,
        text: "Wingo Lottery",
        image: virtualThree,
        gameUrl: "wingo-lottery",
      },
      {
        id: 1.4,
        text: "Dice",
        image: virtualFour,
        gameUrl: "dice",
      },
      {
        id: 1.5,
        text: "Mines Land",
        image: virtualFive,
        gameUrl: "mines-land",
      },
      {
        id: 1.6,
        text: "Ballon",
        image: virtualSix,
        gameUrl: "ballon",
      },
      {
        id: 1.7,
        text: "Pushpa",
        image: virtualSeven,
        gameUrl: "pushpa",
      },
    ],
  },
  {
    id: 2,
    title: "Jillie",
    totalGames: 35,
    gameCategoryUrl: "/games/jillie",
    games: [
      {
        id: 2.1,
        image: originalOne,
        gameUrl: "aviator",
      },
      {
        id: 2.2,
        image: originalTwo,
        gameUrl: "plinko",
      },
      {
        id: 2.3,
        image: originalThree,
        gameUrl: "limbo",
      },
      {
        id: 2.4,
        image: originalFour,
        gameUrl: "aviator",
      },
      {
        id: 2.5,
        image: originalFive,
        gameUrl: "plinko",
      },
      {
        id: 2.6,
        image: originalSix,
        gameUrl: "mines",
      },
    ],
  },
  {
    id: 4,
    title: "Slots",
    totalGames: 8,
    gameCategoryUrl: "/games/slots",
    games: [
      {
        id: 4.1,
        image: slotsOne,
        gameUrl: "jili-game",
      },
      {
        id: 4.2,
        image: slotsTwo,
        gameUrl: "pg-game",
      },
      {
        id: 4.3,
        image: slotsThree,
        gameUrl: "ag-game",
      },
      {
        id: 4.4,
        image: slotsFour,
        gameUrl: "m-game",
      },
      {
        id: 4.5,
        image: slotsFive,
        gameUrl: "cqo-game",
      },
      {
        id: 4.6,
        image: slotsSix,
        gameUrl: "evolution",
      },
    ],
  },
];

export default gameCategories;
