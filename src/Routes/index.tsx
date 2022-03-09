import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "screens";

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
        <Route path="/" element={<Main screen="home" />} />
        <Route path="/skills" element={<Main screen="skills" />} />

        <Route path="/projects" element={<Main screen="projects" />}>
          <Route path="experience" element={<WorkList />} />
          <Route path="portfolio" element={<PortfolioList />} />
          <Route path="achievements" element={<AchievementsList />} />
        </Route>

        <Route path="/academy" element={<Main screen="academy" />}>
          <Route path="udemy" element={<UdemyScreen />} />
          <Route path="youtube" element={<YouTubeScreen />} />
          <Route path="college" element={<CollegeScreen />} />
        </Route>

        <Route path="/contact" element={<Main screen="contact" />} />
      </Routes>
    </Router>
  );
};

export default Index;
