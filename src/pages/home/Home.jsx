import { useState } from "react";
import {
  BottomNavigationBox,
  Carousel,
  GameCategoryBox,
  NoticeBox,
  TabBox,
  TermsBox,
  WinningInfoBox,
} from "../../components";
import { gameCategories } from "../../data";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("Popular");
  return (
    <div>
      <Carousel />
      <NoticeBox />
      <TabBox changeTab={setCurrentTab} />
      {currentTab === "Popular" ? (
        gameCategories.map((category) => (
          <GameCategoryBox
            key={category.id}
            gameCategory={category}
            currentTab={currentTab}
            changeTab={setCurrentTab}
          />
        ))
      ) : currentTab === "Virtual" ? (
        <GameCategoryBox
          key={gameCategories[0].id}
          gameCategory={gameCategories[0]}
          currentTab={currentTab}
          changeTab={setCurrentTab}
        />
      ) : currentTab === "Jili" ? (
        <GameCategoryBox
          key={gameCategories[1].id}
          gameCategory={gameCategories[1]}
          currentTab={currentTab}
          changeTab={setCurrentTab}
        />
      ) : (
        currentTab === "Slots" && (
          <GameCategoryBox
            key={gameCategories[2].id}
            gameCategory={gameCategories[2]}
            currentTab={currentTab}
            changeTab={setCurrentTab}
          />
        )
      )}
      <WinningInfoBox />
      <TermsBox />
      <BottomNavigationBox />
    </div>
  );
};

export default Home;
