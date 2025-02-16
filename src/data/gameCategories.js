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
} from "../images";

const gameCategories = [
  {
    id: 1,
    title: "Lottery",
    totalGames: 4,
    games: [
      {
        id: 1.1,
        text: "Win Go",
        image: lotteryOne,
      },
      {
        id: 1.2,
        text: "K3",
        image: lotteryTwo,
      },
      {
        id: 1.3,
        text: "5D",
        image: lotteryThree,
      },
      {
        id: 1.4,
        text: "Try Win Go",
        image: lotteryFour,
      },
    ],
  },
  {
    id: 2,
    title: "Original",
    totalGames: 35,
    games: [
      {
        id: 2.1,
        image: originalOne,
      },
      {
        id: 2.2,
        image: originalTwo,
      },
      {
        id: 2.3,
        image: originalThree,
      },
      {
        id: 2.4,
        image: originalFour,
      },
      {
        id: 2.5,
        image: originalFive,
      },
      {
        id: 2.6,
        image: originalSix,
      },
    ],
  },
  {
    id: 3,
    title: "Platform Recommendation",
    totalGames: 6,
    games: [
      {
        id: 3.1,
        image: recommendationOne,
        odd: 97.28,
      },
      {
        id: 3.2,
        image: recommendationTwo,
        odd: 96.44,
      },
      {
        id: 3.3,
        image: recommendationThree,
        odd: 97.55,
      },
      {
        id: 3.4,
        image: recommendationFour,
        odd: 96.34,
      },
      {
        id: 3.5,
        image: recommendationFive,
        odd: 96.16,
      },
      {
        id: 3.6,
        image: recommendationSix,
        odd: 96.16,
      },
    ],
  },
  {
    id: 4,
    title: "Slots",
    totalGames: 8,
    games: [
      {
        id: 4.1,
        image: slotsOne,
      },
      {
        id: 4.2,
        image: slotsTwo,
      },
      {
        id: 4.3,
        image: slotsThree,
      },
      {
        id: 4.4,
        image: slotsFour,
      },
      {
        id: 4.5,
        image: slotsFive,
      },
      {
        id: 4.6,
        image: slotsSix,
      },
    ],
  },
  {
    id: 5,
    title: "Sports",
    totalGames: 2,
    games: [
      {
        id: 5.1,
        image: sportsOne,
      },
      {
        id: 5.2,
        image: sportsTwo,
      },
    ],
  },
  {
    id: 6,
    title: "Casino",
    totalGames: 6,
    games: [
      {
        id: 6.1,
        image: casinoOne,
      },
      {
        id: 6.2,
        image: casinoTwo,
      },
      {
        id: 6.3,
        image: casinoThree,
      },
      {
        id: 6.4,
        image: casinoFour,
      },
      {
        id: 6.5,
        image: casinoFive,
      },
      {
        id: 6.6,
        image: casinoSix,
      },
    ],
  },
  {
    id: 7,
    title: "Fishing",
    totalGames: 21,
    games: [
      {
        id: 7.1,
        image: fishingOne,
      },
      {
        id: 7.2,
        image: fishingTwo,
      },
      {
        id: 7.3,
        image: fishingThree,
      },
      {
        id: 7.4,
        image: fishingFour,
      },
      {
        id: 7.5,
        image: fishingFive,
      },
      {
        id: 7.6,
        image: fishingSix,
      },
    ],
  },
  {
    id: 8,
    title: "Rummy",
    totalGames: 1,
    games: [
      {
        id: 8.1,
        image: rummyOne,
      },
    ],
  },
];

export default gameCategories;
