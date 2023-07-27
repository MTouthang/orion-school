import Layout from "./Layout/Layout";

import { Routes, Route } from "react-router-dom";
import Science from "./Pages/Science";
import Art from "./Pages/Art";
import Admission from "./Pages/Admission";
import Feedback from "./Pages/Feedback";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/science" element={<Science />} />
        <Route path="/arts" element={<Art />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
