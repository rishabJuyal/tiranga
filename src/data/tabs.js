import {
  tabBackgroundEight,
  tabBackgroundFive,
  tabBackgroundFour,
  tabBackgroundOne,
  tabBackgroundSeven,
  tabBackgroundSix,
  tabBackgroundThree,
  tabBackgroundTwo,
  tabImageEight,
  tabImageFive,
  tabImageFour,
  tabImageOne,
  tabImageSeven,
  tabImageSix,
  tabImageThree,
  tabImageTwo,
} from "../images";

const tabs = [
  {
    id: 1,
    name: "Popular",
    image: tabImageOne,
    background: tabBackgroundOne,
    classes: "col-span-3 col-start-1",
  },
  {
    id: 2,
    name: "Lottery",
    image: tabImageTwo,
    background: tabBackgroundTwo,
    classes: "col-span-3 col-end-7",
  },
  {
    id: 3,
    name: "Casino",
    image: tabImageThree,
    background: tabBackgroundThree,
    classes: "col-start-1 col-end-3",
  },
  {
    id: 4,
    name: "Slots",
    image: tabImageFour,
    background: tabBackgroundFour,
    classes: "col-start-3 col-end-5",
  },
  {
    id: 5,
    name: "Sports",
    image: tabImageFive,
    background: tabBackgroundFive,
    classes: "col-start-5 col-end-7",
  },
  {
    id: 6,
    name: "Rummy",
    image: tabImageSix,
    background: tabBackgroundSix,
    classes: "col-start-1 col-end-3",
  },
  {
    id: 7,
    name: "Fishing",
    image: tabImageSeven,
    background: tabBackgroundSeven,
    classes: "col-start-3 col-end-5",
  },
  {
    id: 8,
    name: "Original",
    image: tabImageEight,
    background: tabBackgroundEight,
    classes: "col-start-5 col-end-7",
  },
];

export default tabs;
