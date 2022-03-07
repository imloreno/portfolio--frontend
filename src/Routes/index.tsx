import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "screens";
import WorkList from "screens/experience/sub_routes/WorkList";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main screen="home" />} />
        <Route path="/skills" element={<Main screen="skills" />} />
        <Route path="/projects" element={<Main screen="projects" />}>
          <Route path="experience" element={<WorkList />} />
          <Route path="portfolio" element={<p>Work event</p>} />
          <Route path="achievements" element={<p>Work achievements</p>} />
        </Route>
        <Route path="/academy" element={<Main screen="academy" />} />
        <Route path="/contact" element={<Main screen="contact" />} />
      </Routes>
    </Router>
  );
};

export default Index;
