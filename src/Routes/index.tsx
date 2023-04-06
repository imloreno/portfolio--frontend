import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Screens from "screens";

//Submenu routes
import WorkList from "screens/experience/sub_routes/WorkList";
import PortfolioList from "screens/experience/sub_routes/PortfolioList";
import AchievementsList from "screens/experience/sub_routes/AchievementsList";
import UdemyScreen from "screens/academy/sub_routes/udemy";
import YouTubeScreen from "screens/academy/sub_routes/youtube";
import CollegeScreen from "screens/academy/sub_routes/college";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Screens screen="home" />} />
        {/* <Route path="/" element={<Loading />} /> */}
        <Route path="/skills" element={<Screens screen="skills" />} />

        <Route path="/projects" element={<Screens screen="projects" />}>
          <Route path="experience" element={<WorkList />} />
          <Route path="portfolio" element={<PortfolioList />} />
          <Route path="achievements" element={<AchievementsList />} />
        </Route>

        <Route path="/academy" element={<Screens screen="academy" />}>
          <Route path="udemy" element={<UdemyScreen />} />
          <Route path="youtube" element={<YouTubeScreen />} />
          <Route path="college" element={<CollegeScreen />} />
        </Route>

        <Route path="/contact" element={<Screens screen="contact" />} />
      </Routes>
    </Router>
  );
};

export default Index;
