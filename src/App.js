import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import FeedBackForm from "./components/Feedback";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/FeedBackForm" element={<FeedBackForm />} />
      </Routes>
    </Router>
  );
};

export default App;
