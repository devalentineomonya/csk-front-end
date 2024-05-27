import PublicAppBar from "../../Components/AppBars/PublicAppBar";
import Hero from "./Hero/Hero";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import DailyChallengeAndWeeklyLeaderBoard from "./DailyChallengeAndWeeklyLeaderBoard/DailyChallengeAndWeeklyLeaderBoard";
import Benefits from "./Benefits/Benefits";
import JoinUs from "./JoinUs/JoinUs";
import Footer from '../../Components/Footer/Footer'
const HomePage = () => {
  return (
    <div className="max-width">
      <PublicAppBar />
      <Hero />
      <UpcomingEvents />
      <DailyChallengeAndWeeklyLeaderBoard />
      <Benefits />
      <JoinUs />
      <Footer />
    </div>
  );
};
export default HomePage;
