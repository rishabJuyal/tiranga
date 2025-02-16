import { BottomNavigationBox, Carousel, GameCategoryBox, NoticeBox, TabBox, TermsBox, WinningInfoBox } from "../../components";
import { gameCategories } from "../../data";

const Home = () => {
  return (
    <div>
      <Carousel />
      <NoticeBox />
      <TabBox />
      {gameCategories.map((category) => (
        <GameCategoryBox key={category.id} gameCategory={category} />
      ))}
      <WinningInfoBox />
      <TermsBox />
      <BottomNavigationBox />
    </div>
  );
};

export default Home;
