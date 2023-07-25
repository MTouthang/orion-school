import Layout from "./Layout/Layout";

import { Routes, Route } from "react-router-dom";
import Science from "./Pages/Science";
import Art from "./Pages/Art";
import Admission from "./Pages/Admission";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/science" element={<Science />} />
        <Route path="/arts" element={<Art />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </>
  );
};

export default App;
