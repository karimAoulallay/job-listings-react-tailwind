import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Show from "./pages/Show";
import Home from "./pages/Home";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Show />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
