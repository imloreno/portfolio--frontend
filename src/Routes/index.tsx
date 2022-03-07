import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "screens";
import AchievementsList from "screens/experience/sub_routes/AchievementsList";
import PortfolioList from "screens/experience/sub_routes/PortfolioList";
import WorkList from "screens/experience/sub_routes/WorkList";

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
        <Route path="/academy" element={<Main screen="academy" />} />
        <Route path="/contact" element={<Main screen="contact" />} />
      </Routes>
    </Router>
  );
};

export default Index;
